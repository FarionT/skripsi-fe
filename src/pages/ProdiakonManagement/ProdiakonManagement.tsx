import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './ProdiakonManagement.scss'
import { useErrorHandler } from 'utils/useErrorHandler'
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Dropdown,
  FormField,
  Headline,
  Modal,
  RadioButton,
  Toast,
} from 'ui-kit'
import { useSelector } from 'react-redux'
import { RootState } from 'utils/redux'
import { useScaleLoader } from 'utils/getScaleLoader'
import { getAllChurches } from 'services/church.services'
import { TChurchProdeacon, TProdeacon } from 'types'
import { createProdeacon, getProdeaconById, updateProdeacon } from 'services/prodeacon.services'

type SelectedSchedules = {
  [key: string]: boolean // Allow any string as a key with a boolean value
}

const error = {
  full_name: '',
  nick_name: '',
  email: '',
  active: false,
  dob: '',
  zipcode: '',
  mass_coordination_flag: false,
  mass_coordination_type: '',
  preferential_schedules: '',
  user_registration_number: '',
}

const ProdiakonManagement = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleErrorResponse = useErrorHandler()
  const [showLoader, hideLoader] = useScaleLoader()

  const numericRegex = /^\d*$/
  const prodeaconId = location.state?.id || ''
  const [prodeaconData, setProdeaconData] = useState<TProdeacon>({
    id: '',
    full_name: '',
    nick_name: '',
    email: '',
    active: false,
    phone_number: '',
    dob: '',
    inauguration_year: '',
    birthplace: '',
    address: '',
    province: '',
    city: '',
    district: '',
    sub_district: '',
    zipcode: '',
    status: '',
    formatted_status: '',
    mass_coordination_flag: false,
    mass_coordination_type: '',
    preferential_schedules: [],
    preferential_church: '',
    user_registration_number: '',
  })

  const fetchProdeaconData = async () => {
    showLoader()

    getProdeaconById(prodeaconId)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          console.log(resData)

          setProdeaconData(resData)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        hideLoader()
      })
  }

  const [actionForm, setActionForm] = useState('edit')
  const [titlePage, setTitlePage] = useState('Edit Prodiakon')
  const [errorMsg, setErrorMsg] = useState(error)
  const [isFormNotValid, setIsFormNotValid] = useState(true)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  // get option status prodeacon
  const optionStatusProd = useSelector((state: RootState) => state.dropdown.statuses)
  const [statusDropdown, setStatusDropdown] = useState<any[]>([])

  // get option coordinator type
  const optionCoordinatorTypes = useSelector((state: RootState) => state.dropdown.coordtypes)
  const [coordinatorTypeDropdown, setCoordinatorTypeDropdown] = useState<any[]>([])

  // get data church
  const [selectedPreferentialSchedules, setSelectedPreferentialSchedules] =
    useState<SelectedSchedules>({})
  const [selectedTimes, setSelectedTimes] = useState<number[]>([])
  const [churchData, setChurchData] = useState<TChurchProdeacon[]>([])
  const fetchAllChurches = async () => {
    getAllChurches()
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          console.log(resData)

          // Create a mapping from day to index
          const daysIndexMap: any = {
            Senin: 0,
            Selasa: 1,
            Rabu: 2,
            Kamis: 3,
            Jumat: 4,
            Sabtu: 5,
            Minggu: 6,
          }
          // Process each church's mass schedule
          const churchesWithGroupedMassSchedule = resData.map((church: any) => {
            const groupedMassSchedule = church.mass_schedule.reduce((acc: any, item: any) => {
              if(!prodeaconId) {
                setSelectedTimes((prev) => [
                  ...prev, item.id
                ])
              }

              const day: keyof typeof daysIndexMap = item.day // Extract the day from the current item
              const dayIndex = daysIndexMap[day] // Get the index for the current day

              // Create a day entry if it doesn't exist using the index from daysIndexMap
              if (!acc[dayIndex]) {
                acc[dayIndex] = {
                  church_id: church.id, // Add church_id here
                  day: day,
                  min_mass_coordination_type: item.min_mass_coordination_type, // Include any additional fields if needed
                  quota: item.quota,
                  times: [], // Initialize times array
                }
              }

              // Push the time information into the times array
              acc[dayIndex].times.push({ id: item.id, time: item.time })

              return acc
            }, new Array(Object.keys(daysIndexMap).length).fill(null)) // Initialize acc as an array of nulls for sorting later

            // Remove null entries and filter out undefined values
            const sortedGroupedSchedule = groupedMassSchedule.filter(Boolean)

            return {
              ...church,
              mass_schedule: sortedGroupedSchedule, // Adding the grouped schedule to the church object
            }
          })
          setChurchData(churchesWithGroupedMassSchedule)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        //
      })
  }

  const breadcrumbPaths = [
    { path: '/dashboard/master-data-prodeacon', name: 'Daftar Prodiakon' },
    {
      path: `/dashboard/master-data-prodeacon/${prodeaconData?.user_registration_number}`,
      name: titlePage,
    },
  ]

  const checkError = (name: string, value: string, label: string) => {
    let tempErrorMsg = ''
    if (!value.replace(/^\s+|\s+$/g, '')) {
      tempErrorMsg = label + ' harus diisi'
    } else if (name === 'email' && !/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      tempErrorMsg = `Format ${label} invalid`
    } else if ((name === 'zipcode' || name === 'inauguration_year' || name === 'user_registration_number') && !numericRegex.test(value)) {
      tempErrorMsg = label + ' hanya boleh angka'
    }

    setErrorMsg({ ...errorMsg, [name]: tempErrorMsg })
  }

  const onChangeProdeaconData = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputLabel = e.target.dataset.label || ''

    let value = e.target.value
    if (e.target.name === 'zipcode') {
      value = value.replace(/\D/g, '').slice(0, 5)
    } else if (e.target.name === 'inauguration_year') {
      value = value.replace(/\D/g, '').slice(0, 4)
    } else if (e.target.name === 'user_registration_number') {
      value = value.replace(/\D/g, '')
    }

    setProdeaconData({
      ...prodeaconData,
      [e.target.name]: value,
    })
    checkError(e.target.name, value, inputLabel)
  }

  const [valuePhoneNumber, setValuePhoneNumber] = useState(prodeaconData.phone_number)
  const onChangeProdeaconPhoneNumber = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputLabel = e.target.dataset.label || ''
    const value = e.target.value
    if (!value) {
      checkError(e.target.name, e.target.value, inputLabel)
    }
    // Replace non-numeric characters and prevent leading 0 or 62
    const numericValue = value.replace(/\D/g, '')
    // Ensure it doesn't start with '0' or '62'
    if (!numericValue.startsWith('0') && !numericValue.startsWith('62')) {
      setValuePhoneNumber(numericValue)
    }
  }

  const onChangeSelectStatus = (value: string) => {
    setProdeaconData({
      ...prodeaconData,
      status: value,
    })
  }

  const onChangeSelectCoordTypes = (value: string) => {
    setProdeaconData({
      ...prodeaconData,
      mass_coordination_type: value,
    })
  }

  const preferentialSchedules = churchData.map((item, index) => {
    const chunkArray = (arr: any, chunkSize: any) => {
      const result = []
      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize))
      }
      return result
    }
    return (
      <div key={index} className='form-schedule-preferences'>
        <div className='schedule-preferences-church'>
          <FormField
            isReadonly={true}
            placeholder='Lokasi'
            label='Lokasi'
            textAreaSize='large'
            type='text'
            name='name'
            value={item.name}
          />
        </div>
        <div className='schedule-preferences-section'>
          <div className='FormField-Label FormField_LabelLarge'>Hari & Jam Misa</div>
          <div className='schedule-preferences-data'>
            {item.mass_schedule.map((mass, mdex) => (
              <Dropdown key={mdex} defaultValue={mass.day ?? ''} dropdownType='default'>
                {chunkArray(mass.times || [], 2).map((timeChunk, chunkIndex) => (
                  <div className='schedule-preferences-row' key={chunkIndex}>
                    {timeChunk.map((times: any, tdex: any) => {
                      let isChecked = selectedPreferentialSchedules[times.id] || false
                      if(!prodeaconId) {
                        isChecked = true
                      }

                      return (
                        <div className='schedule-preferences-time' key={tdex}>
                          <Checkbox
                            dataID={times.id}
                            label={times.time.slice(0, -3)}
                            isChecked={isChecked}
                            onChange={() => {
                              setSelectedPreferentialSchedules((prev) => ({
                                ...prev,
                                [times.id]: !isChecked,
                              }))

                              setSelectedTimes((prevTimes) => {
                                if (!isChecked) {
                                  // Add time ID if checked
                                  return [...prevTimes, times.id]
                                } else {
                                  // Remove time ID if unchecked
                                  return prevTimes.filter((id) => id !== times.id)
                                }
                              })
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                ))}
              </Dropdown>
            ))}
          </div>
        </div>
      </div>
    )
  })

  useEffect(() => {
    setProdeaconData({
      ...prodeaconData,
      phone_number: valuePhoneNumber,
    })
  }, [valuePhoneNumber])

  useEffect(() => {
    if (!prodeaconId) {
      setTitlePage('Tambah Prodiakon')
      setActionForm('add')
    }
  }, [prodeaconData])

  useEffect(() => {
    const initialSchedules: SelectedSchedules = {} // Initialize as the defined type
    // Check if preferential_schedules is not empty
    if (prodeaconData.preferential_schedules && prodeaconData.preferential_schedules.length > 0) {
      prodeaconData.preferential_schedules.forEach((id) => {
        initialSchedules[id] = true // Mark as checked for non-empty schedules
      })
    }

    setSelectedPreferentialSchedules(initialSchedules)

    // Optionally set selectedTimes if the schedules are empty or not
    setSelectedTimes(
      prodeaconData.preferential_schedules && prodeaconData.preferential_schedules.length > 0
        ? prodeaconData.preferential_schedules
        : []
    )
  }, [prodeaconData.preferential_schedules])

  useEffect(() => {
    const filteredOptions = optionStatusProd
      .filter((item: any) => item.active === prodeaconData.active)
      .map((item: any) => ({
        label: item.title,
        value: item.id,
      }))

    setStatusDropdown(filteredOptions)
  }, [optionStatusProd, prodeaconData.active])

  useEffect(() => {
    const filteredOptions = optionCoordinatorTypes.map((item: any) => ({
      label: item.title,
      value: item.id,
    }))

    setCoordinatorTypeDropdown(filteredOptions)
    fetchAllChurches()
    if(prodeaconId) {
      fetchProdeaconData()
    }
  }, [])

  // handle button submit form for validation
  useEffect(() => {
    const isFormValid =
      prodeaconData.full_name &&
      !errorMsg['full_name'] &&
      prodeaconData.nick_name &&
      !errorMsg['nick_name'] &&
      prodeaconData.user_registration_number &&
      !errorMsg['user_registration_number'] &&
      prodeaconData.dob &&
      !errorMsg['dob'] &&
      prodeaconData.email &&
      !errorMsg['email'] &&
      prodeaconData.status &&
      (prodeaconData.mass_coordination_flag ?
      prodeaconData.mass_coordination_flag && prodeaconData.mass_coordination_type : true)
        ? false
        : true

    setIsFormNotValid(isFormValid)
  }, [prodeaconData, errorMsg])

  // handle submit form
  const handleSubmit = () => {
    setShowConfirmationModal(true)
  }

  // execute submit form
  const submitProdeaconManagement = () => {
    showLoader()

    const temp = {
      full_name: prodeaconData.full_name,
      nick_name: prodeaconData.nick_name,
      user_registration_number: Number(prodeaconData.user_registration_number),
      email: prodeaconData.email,
      active: prodeaconData.active,
      phone_number: prodeaconData.phone_number,
      dob: prodeaconData.dob,
      inauguration_year: prodeaconData.inauguration_year,
      birthplace: prodeaconData.birthplace,
      address: prodeaconData.address,
      province: prodeaconData.province,
      city: prodeaconData.city,
      district: prodeaconData.district,
      sub_district: prodeaconData.sub_district,
      zipcode: prodeaconData.zipcode,
      status: prodeaconData.status,
      mass_coordination_flag: prodeaconData.mass_coordination_flag ? true : false,
      mass_coordination_type: prodeaconData.mass_coordination_type,
      preferential_schedules: selectedTimes,
    }

    console.log(temp)

    if (actionForm === 'add') {
      createProdeacon(temp)
        .then((res) => {
          if (res.status === 201) {
            Toast('Tambah Prodiakon Sukses', 'success', res.data.message)
            navigate(-1)
          } else handleErrorResponse(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          hideLoader()
        })
    } else if (actionForm === 'edit') {
      updateProdeacon(prodeaconData.id, temp)
        .then((res) => {
          if (res.status === 200) {
            Toast('Edit Prodiakon Sukses', 'success', res.data.message)
            navigate(-1)
          } else handleErrorResponse(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          hideLoader()
        })
    }

    setShowConfirmationModal(false)
  }

  return (
    <div className='ProdiakonManagement'>
      <Modal
        headerText='Simpan Data Prodiakon'
        isShown={showConfirmationModal}
        hide={() => setShowConfirmationModal(false)}
        staticBackdrop={false}
      >
        <div>
          <div className='gereja-detail-modal-container'>
            <div className='gereja-detail-modal-subtitle subtitle'>
              Apakah Anda yakin ingin menyimpan perubahan pada data <strong>Prodiakon</strong>?
              Pastikan semua informasi yang dimasukkan sudah benar.
            </div>
          </div>
          <div className='form'>
            <div className='form-button'>
              <Button
                buttonType='outline'
                buttonAppearance='secondary'
                onClick={() => setShowConfirmationModal(false)}
              >
                Batal
              </Button>
              <Button buttonAppearance='success' onClick={submitProdeaconManagement}>
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div className='frame'>
        <Breadcrumbs paths={breadcrumbPaths} isBack={true} />
        <Headline headlineText={titlePage} headlineSize='big' />
        <div className='data prodeacon-data'>
          <div className='content prodeacon-content'>
            <div className='form prodeacon-form'>
              <div className='form-section'>
                <div className='form-section-title'>Info Prodiakon</div>
                <div className='form-row'>
                  <FormField
                    isRequired={true}
                    onChange={onChangeProdeaconData}
                    placeholder='No. Registrasi'
                    label='No. Registrasi'
                    textAreaSize='large'
                    type='text'
                    name='user_registration_number'
                    value={prodeaconData.user_registration_number ?? ''}
                    error={errorMsg?.user_registration_number}
                  />
                  <FormField
                    onChange={onChangeProdeaconData}
                    placeholder='Tahun Bergabung'
                    label='Tahun Bergabung'
                    textAreaSize='large'
                    type='text'
                    name='inauguration_year'
                    value={prodeaconData.inauguration_year ?? ''}
                  />
                </div>
                <div className="form-row">
                  <FormField
                      isRequired={true}
                      onChange={onChangeProdeaconData}
                      placeholder='Nama'
                      label='Nama'
                      textAreaSize='large'
                      type='text'
                      name='full_name'
                      value={prodeaconData.full_name ?? ''}
                      error={errorMsg?.full_name}
                    />
                  <FormField
                      isRequired={true}
                      onChange={onChangeProdeaconData}
                      placeholder='Nickname'
                      label='Nickname'
                      textAreaSize='large'
                      type='text'
                      name='nick_name'
                      value={prodeaconData.nick_name ?? ''}
                      error={errorMsg?.nick_name}
                    />
                </div>
                <div className='form-row'>
                  <FormField
                    onChange={onChangeProdeaconData}
                    placeholder='Tempat Lahir'
                    label='Tempat Lahir'
                    textAreaSize='large'
                    type='text'
                    name='birthplace'
                    value={prodeaconData.birthplace ?? ''}
                  />
                  <FormField
                    isRequired={true}
                    onChange={onChangeProdeaconData}
                    placeholder='Tanggal Lahir'
                    label='Tanggal Lahir'
                    textAreaSize='large'
                    type='date'
                    name='dob'
                    value={prodeaconData.dob ? prodeaconData.dob.split('T')[0] : ''}
                    error={errorMsg?.dob}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    leading='+62'
                    onChange={onChangeProdeaconPhoneNumber}
                    placeholder='No. Whatsapp'
                    label='No. Whatsapp'
                    textAreaSize='large'
                    type='text'
                    name='phone_number'
                    value={prodeaconData.phone_number ?? ''}
                  />
                  <FormField
                    isRequired={true}
                    onChange={onChangeProdeaconData}
                    placeholder='Email'
                    label='Email'
                    textAreaSize='large'
                    type='text'
                    name='email'
                    value={prodeaconData.email ?? ''}
                    error={errorMsg?.email}
                  />
                </div>
              </div>
              <div className='form-section'>
                <div className='form-section-title'>Alamat Prodiakon</div>
                <div className='form-row'>
                  <FormField
                    placeholder='Detail Alamat'
                    label='Detail Alamat'
                    textAreaSize='large'
                    type='textarea'
                    onChangeTextArea={onChangeProdeaconData}
                    name='address'
                    value={prodeaconData.address ?? ''}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    onChange={onChangeProdeaconData}
                    placeholder='Provinsi'
                    label='Provinsi'
                    textAreaSize='large'
                    type='text'
                    name='province'
                    value={prodeaconData.province ?? ''}
                  />
                  <FormField
                    onChange={onChangeProdeaconData}
                    placeholder='Kota / Kabupaten'
                    label='Kota / Kabupaten'
                    textAreaSize='large'
                    type='text'
                    name='city'
                    value={prodeaconData.city ?? ''}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    onChange={onChangeProdeaconData}
                    placeholder='Kecamatan'
                    label='Kecamatan'
                    textAreaSize='large'
                    type='text'
                    name='district'
                    value={prodeaconData.district ?? ''}
                  />
                  <FormField
                    onChange={onChangeProdeaconData}
                    placeholder='Kelurahan'
                    label='Kelurahan'
                    textAreaSize='large'
                    type='text'
                    name='sub_district'
                    value={prodeaconData.sub_district ?? ''}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    className='church-postal-code'
                    onChange={onChangeProdeaconData}
                    placeholder='Kode Pos'
                    label='Kode Pos'
                    textAreaSize='large'
                    type='text'
                    name='zipcode'
                    value={prodeaconData.zipcode ?? ''}
                  />
                </div>
              </div>
              <div className='form-section'>
                <div className='form-section-title'>Status & Jadwal Tugas</div>
                <div className='form-subsection'>
                  <div className='form-subsection-title'>Status Prodiakon</div>
                  <div className='form-row'>
                    <div className='form-radio form-status'>
                      <RadioButton
                        label='Aktif'
                        name='status_prodeacon'
                        isChecked={
                          typeof prodeaconData.active !== 'undefined'
                            ? !!prodeaconData.active
                            : false
                        }
                        onChange={() =>
                          setProdeaconData({ ...prodeaconData, active: true, status: '' })
                        }
                      ></RadioButton>
                      <RadioButton
                        label='Tidak Aktif'
                        name='status_prodeacon'
                        isChecked={
                          typeof prodeaconData.active !== 'undefined'
                            ? !prodeaconData.active
                            : false
                        }
                        onChange={() =>
                          setProdeaconData({ ...prodeaconData, active: false, status: '' })
                        }
                      ></RadioButton>
                    </div>
                    {prodeaconData.active !== null ? (
                      <FormField
                        isRequired={true}
                        name='status'
                        label='Status'
                        placeholder='Status'
                        value={prodeaconData.status}
                        type='select'
                        options={statusDropdown}
                        onChangeSelect={onChangeSelectStatus}
                        isClear={false}
                        getOptionLabel={'label'}
                        getOptionValue={'value'}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                {prodeaconData.active ? (
                  <div className='form-subsection'>
                    <div className='form-subsection-title'>Ketua / Koordinator Misa</div>
                    <div className='form-row'>
                      <div className='form-checkbox form-coordinator-availability'>
                        <div className='label-coordinator-availability'>Bersedia</div>
                        <Checkbox
                          label=''
                          isChecked={prodeaconData.mass_coordination_flag}
                          onChange={() =>
                            setProdeaconData({
                              ...prodeaconData,
                              mass_coordination_flag: !prodeaconData.mass_coordination_flag,
                            })
                          }
                        ></Checkbox>
                      </div>
                      <FormField
                        isRequired={prodeaconData.mass_coordination_flag}
                        className={prodeaconData.mass_coordination_flag ? '' : 'form-hidden'}
                        name='mass_coordination_type'
                        label='Jenis Koordinator'
                        placeholder='Jenis Koordinator'
                        value={prodeaconData.mass_coordination_type || ''}
                        type='select'
                        options={coordinatorTypeDropdown}
                        onChangeSelect={onChangeSelectCoordTypes}
                        isClear={false}
                        getOptionLabel={'label'}
                        getOptionValue={'value'}
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <div className='form-subsection'>
                  <div className='form-subsection-title'>Preferensi Jadwal</div>
                  <div className='form-row'>{preferentialSchedules}</div>
                </div>
              </div>
              <div className='form-section'>
                <div className='form-button'>
                  <Button
                    buttonType='outline'
                    buttonAppearance='secondary'
                    onClick={() => navigate(-1)}
                  >
                    Batal
                  </Button>
                  <Button
                    buttonAppearance='success'
                    onClick={handleSubmit}
                    isDisabled={isFormNotValid}
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdiakonManagement
