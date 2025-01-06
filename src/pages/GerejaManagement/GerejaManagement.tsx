import { Breadcrumbs, Button, FormField, Headline, Icon, Modal, Table, Toast } from 'ui-kit'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ColumnProps, TChurch, TMassSchedule } from 'types'
import './GerejaManagement.scss'
import { useScaleLoader } from 'utils/getScaleLoader'
import { getChurchById, updateChurch } from 'services/church.services'
import { useErrorHandler } from 'utils/useErrorHandler'

const errorMass = {
  day: '',
  time: '',
  quota: '',
  min_mass_coordination_type: '',
  is_deleted: false,
}

const inputMassChange = {
  day: false,
  time: false,
  quota: false,
  min_mass_coordination_type: false,
}

const error = {
  name: '',
  parish: '',
  address: '',
  province: '',
  city: '',
  district: '',
  sub_district: '',
  zipcode: '',
}

const dayDropdown = [
  {
    label: 'Senin',
    value: 'senin',
  },
  {
    label: 'Selasa',
    value: 'selasa',
  },
  {
    label: 'Rabu',
    value: 'rabu',
  },
  {
    label: 'Kamis',
    value: 'kamis',
  },
  {
    label: 'Jumat',
    value: 'jumat',
  },
  {
    label: 'Sabtu',
    value: 'sabtu',
  },
  {
    label: 'Minggu',
    value: 'minggu',
  },
]

const minCoordinatorDropdown = [
  {
    label: 'K1',
    value: 'k1',
  },
  {
    label: 'K2',
    value: 'k2',
  },
  {
    label: 'K3',
    value: 'k3',
  },
]

const GerejaManagement = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleErrorResponse = useErrorHandler()
  const churchId = location.state?.id || ''
  const churchData = location.state?.item || ''
  const numericRegex = /^\d*$/
  const [showLoader, hideLoader] = useScaleLoader()

  const [churchDetailData, setChurchDetailData] = useState<TChurch>({
    name: '',
    parish: '',
    address: '',
    province: '',
    city: '',
    district: '',
    sub_district: '',
    zipcode: '',
    mass_schedule: []
  })
  // prepare for table
  const [data, setData] = useState<TMassSchedule[]>([])
  const [errorMsg, setErrorMsg] = useState(error)

  const fetchChurchData = async () => {
    showLoader()

    getChurchById(churchId)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          const massSchedules = resData.mass_schedule
          if (massSchedules?.length > 0) {
            setData(massSchedules.map((item: any) => {
              return {
                ...item,
                time: item.time.slice(0,5),
                church_id: churchId,
                is_deleted: false,
              }
            }))
          }

          setChurchDetailData(resData)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        hideLoader()
      })
  }

  const breadcrumbPaths = [
    { path: '/dashboard/master-data-church', name: 'Daftar Gereja' },
    {
      path: `/dashboard/master-data-church/${churchData.slug}`,
      name: churchDetailData?.name + ' - Info Gereja',
    },
  ]

  // prepare for manage mass
  const [massData, setMassData] = useState<TMassSchedule>({
    day: '',
    time: '',
    quota: 0,
    min_mass_coordination_type: '',
    is_deleted: false,
  })
  const [showModal, setShowModal] = useState(false)
  const [actionModal, setActionModal] = useState('Tambah')
  const [massErrorMsg, setMassErrorMsg] = useState(errorMass)
  const [isMassNotValid, setIsMassNotValid] = useState(false)
  const [isFormNotValid, setIsFormNotValid] = useState(true)

  // handle close modal tambah / edit
  const handleCloseModal = () => {
    setMassData({
      day: '',
      time: '',
      min_mass_coordination_type: '',
      quota: 0,
    })
    setIsFormNotValid(false)
    setMassErrorMsg(errorMass)

    setShowModal(false)
  }

  const checkMassError = (name: string, value: string, label: string) => {
    let tempErrorMsg = ''
    if (!value) {
      tempErrorMsg = label + ' harus diisi'
    } else {
      if (name === 'quota') {
        if (Number(value) < 1) tempErrorMsg = label + ' minimal 1'
      }
    }

    setMassErrorMsg({ ...massErrorMsg, [name]: tempErrorMsg })
  }

  const onChangeMassData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLabel = e.target.dataset.label || ''

    let value = e.target.value
    if (e.target.name === 'quota') {
      value = value.replace(/[^0-9]/g, '') // Replace all char other than number
      if (/^0\d$/.test(value)) {
        value = value.replace(/^0+/, '') || '0' // Replace leading zero 
      }
    }

    setMassData({
      ...massData,
      [e.target.name]: value
    })
    checkMassError(e.target.name, value, inputLabel)
  }

  // handle select day
  const onChangeSelectDay = (value: string) => {
    setMassData({
      ...massData,
      day: value,
    })

    checkMassError('day', value, 'Hari')
  }

  // handle select min coordinator
  const onChangeSelectMinCoordinator = (value: string) => {
    setMassData({
      ...massData,
      min_mass_coordination_type: value,
    })

    checkMassError('min_mass_coordination_type', value, 'Jenis Koordinator')
  }

  // handle add jadwal misa
  const handleAddMass = () => {
    setActionModal('Tambah')
    setShowModal(true)
  }

  // handle add jadwal misa
  const handleEditMass = (value: TMassSchedule) => {
    setMassData({
      id: value.id,
      day: value.day,
      time: value.time,
      min_mass_coordination_type: value.min_mass_coordination_type,
      quota: value.quota,
    })
    setIsMassNotValid(false)

    setActionModal('Edit')
    setShowModal(true)
  }

  const [dataToDelete, setDataToDelete] = useState<TMassSchedule>({
    day: '',
    time: '',
    quota: 0,
    min_mass_coordination_type: '',
  })
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // handle close modal delete
  const handleCloseDeleteModal = () => {
    setDataToDelete({
      day: '',
      time: '',
      quota: 0,
      min_mass_coordination_type: '',
    })
    setShowDeleteModal(false)
  }

  const handleDeleteMass = (value: any) => {
    setDataToDelete({
      id: value.id,
      day: value.day,
      time: value.time,
      quota: value.quota,
      min_mass_coordination_type: value.min_mass_coordination_type,
    })
    setShowDeleteModal(true)
  }

  const submitDeleteMass = (valueDelete: TMassSchedule) => {
    setData(
      data
        .map((item) => {
          // If the item's ID matches the valueDelete ID, mark it as deleted
          if (valueDelete.id && item.id === valueDelete.id) {
            return {
              ...item,
              is_deleted: true,
            }
          }
          // If the item has no ID but matches by day and time, return it for removal
          else if (
            !valueDelete.id &&
            item.day === valueDelete.day &&
            item.time === valueDelete.time
          ) {
            return null // Mark for removal
          }
          return item // Keep the item unchanged
        })
        .filter((item): item is TMassSchedule => item !== null) // Filter out the null items
    )

    Toast('Berhasil Dihapus', 'success', 'Jadwal Misa berhasil dihapus')
    setShowDeleteModal(false)
  }

  useEffect(() => {
    const isMassDataValid =
      massData.day &&
        massData.time &&
        massData.min_mass_coordination_type &&
        Number(massData.quota) > 0
        ? false
        : true

    setIsMassNotValid(isMassDataValid)
  }, [massData, massErrorMsg])

  // handle submit form
  const dayOrder = dayDropdown.map((day) => day.label)
  const handleSubmitMass = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (actionModal === 'Tambah') {
      const filterData = data.filter((item) => item.time === (massData.time + ':00') && item.day === massData.day)
      if (filterData.length > 0) {
        Toast('Tambah Jadwal Misa Gagal', 'danger', 'Jadwal Misa Sudah Terdaftar');
      } else {
        const updatedData = [...data, {
          id: null,
          church_id: churchId,
          day: massData.day,
          time: massData.time + ':00',
          min_mass_coordination_type: massData.min_mass_coordination_type,
          quota: Number(massData.quota),
          is_deleted: false,
        }]

        // Sort updated data
        const sortedData = updatedData.filter((item) => item.is_deleted === false).sort((a: any, b: any) => {
          const dayA = dayOrder.indexOf(a.day) // Index of day A in the order
          const dayB = dayOrder.indexOf(b.day) // Index of day B in the order

          if (dayA !== dayB) {
            return dayA - dayB; // Sort by day order
          } else {
            return a.time.localeCompare(b.time); // Sort by time
          }
        });

        // Update state with sorted data
        setData(sortedData);
        Toast('Tambah Jadwal Misa Sukses', 'success', 'Penambahan data jadwal misa berhasil disimpan');
      }
    } else {
      setData(
        data.map((item) => {
          if (item.id === massData.id) {
            return {
              ...item,
              day: massData.day,
              time: massData.time + ':00',
              min_mass_coordination_type: massData.min_mass_coordination_type,
              quota: Number(massData.quota),
            }
          }
          return item
        })
      )

      Toast('Edit Jadwal Misa Sukses', 'success', 'Perubahan data jadwal misa berhasil disimpan');
    }

    handleCloseModal()
  }

  useEffect(() => {
    fetchChurchData()
  }, [])

  const columns: Array<ColumnProps<TMassSchedule>> = [
    {
      key: 'day',
      title: 'Hari',
    },
    {
      key: 'time',
      title: 'Jam Misa',
      render: (_, value) => {
        const currentDate = new Date().toISOString().split('T')[0] // Get today's date in YYYY-MM-DD format
        const timeString = value.time ? `${currentDate}T${value.time}` : '' // Combine date and time into a valid ISO string

        const time = new Date(timeString)
        return (
          <span>{time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
        )
      },
    },
    {
      key: 'quota',
      title: 'Kuota Prodiakon',
    },
    {
      key: 'min_mass_coordination_type',
      title: 'Jenis Koordinator',
    },
    {
      key: 'action',
      title: 'Action',
      render: (_, value) => (
        <div className='action-td'>
          <div title='Ubah'>
            <Icon
              type='PencilAlt'
              size='big'
              className='action-edit'
              onClick={() => handleEditMass(value)}
            />
          </div>
          <div title='Hapus'>
            <Icon
              type='TrashAlt'
              size='big'
              className='action-delete'
              onClick={() => handleDeleteMass(value)}
            />
          </div>
        </div>
      ),
    },
  ]

  const checkError = (name: string, value: string, label: string) => {
    let tempErrorMsg = ''
    if (!value.replace(/^\s+|\s+$/g, '')) {
      tempErrorMsg = label + ' harus diisi'
    }

    setErrorMsg({ ...errorMsg, [name]: tempErrorMsg })
  }

  const onChangeChurchData = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputLabel = e.target.dataset.label || ''

    let value = e.target.value
    if (e.target.name === 'zipcode') {
      value = value.replace(/\D/g, '').slice(0, 5)
    }

    setChurchDetailData({
      ...churchDetailData,
      [e.target.name]: value,
    })
    checkError(e.target.name, e.target.value, inputLabel)
  }

  useEffect(() => {
    const isFormValid =
      churchDetailData.name &&
      !errorMsg['name'] &&
      churchDetailData.parish &&
      !errorMsg['parish'] &&
      churchDetailData.address &&
      !errorMsg['address'] &&
      churchDetailData.province &&
      !errorMsg['province'] &&
      churchDetailData.city &&
      !errorMsg['city'] &&
      churchDetailData.district &&
      !errorMsg['district'] &&
      churchDetailData.sub_district &&
      !errorMsg['sub_district'] &&
      churchDetailData.zipcode &&
      !errorMsg['zipcode']
      ? false
      : true

    setIsFormNotValid(isFormValid)
  }, [churchDetailData, errorMsg])

  // handle submit form
  const handleSubmit = () => {
    showLoader()

    const temp = {
      address: churchDetailData.address,
      province: churchDetailData.province,
      city: churchDetailData.city,
      district: churchDetailData.district,
      sub_district: churchDetailData.sub_district,
      zipcode: churchDetailData.zipcode,
      mass_schedule: data,
    }

    updateChurch(churchId, temp)
      .then((res) => {
        if (res.status === 200) {
          Toast('Edit Gereja Sukses', 'success', res.data.message)
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

  return (
    <div className='GerejaManagement'>
      <Modal
        headerText='Hapus Jadwal Misa'
        isShown={showDeleteModal}
        hide={handleCloseDeleteModal}
        staticBackdrop={false}
      >
        <div>
          <div className='gereja-detail-modal-container'>
            <div className='gereja-detail-modal-subtitle subtitle'>
              Apakah Anda yakin menghapus <strong>Jadwal Misa</strong>
            </div>
          </div>
          <div className='form'>
            <div className='form-button'>
              <Button
                buttonType='outline'
                buttonAppearance='secondary'
                onClick={handleCloseDeleteModal}
              >
                Batal
              </Button>
              <Button buttonAppearance='destructive' onClick={() => submitDeleteMass(dataToDelete)}>
                Hapus
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        headerText={actionModal + ' Misa'}
        isShown={showModal}
        hide={() => {
          handleCloseModal()
        }}
        staticBackdrop={false}
      >
        <div className='gereja-detail-modal-container'>
          <form className='form' onSubmit={handleSubmitMass}>
            <div className='form-row'>
              {actionModal === 'Tambah' ? (
                <FormField
                  isRequired={true}
                  name='day'
                  label='Hari'
                  placeholder='Hari'
                  value={massData.day}
                  type='select'
                  options={dayDropdown}
                  onChangeSelect={onChangeSelectDay}
                  isClear={false}
                  getOptionLabel={'label'}
                  getOptionValue={'label'}
                />
              ) : (
                <FormField
                  isReadonly={true}
                  placeholder='Hari'
                  label='Hari'
                  type='text'
                  name='day'
                  value={massData.day}
                />
              )}
            </div>
            <div className='form-row'>
              {actionModal === 'Tambah' ? (
                <FormField
                  isReadonly={actionModal !== 'Tambah'}
                  isRequired={true}
                  onChange={onChangeMassData}
                  placeholder='Jam Misa'
                  label='Jam Misa'
                  type='time'
                  name='time'
                  value={massData.time}
                  error={massErrorMsg?.time}
                />
              ) : (
                <FormField
                  isReadonly={true}
                  placeholder='Jam Misa'
                  label='Jam Misa'
                  type='text'
                  name='time'
                  value={massData.time}
                />
              )}
            </div>
            <div className='form-row'>
              <FormField
                isReadonly={actionModal !== 'Tambah'}
                isRequired={true}
                name='min_mass_coordination_type'
                label='Jenis Koordinator'
                placeholder='Jenis Koordinator'
                value={massData.min_mass_coordination_type}
                type='select'
                options={minCoordinatorDropdown}
                onChangeSelect={onChangeSelectMinCoordinator}
                isClear={false}
                getOptionLabel={'label'}
                getOptionValue={'label'}
              />
            </div>
            <div className='form-row'>
              <FormField
                isRequired={true}
                onChange={onChangeMassData}
                placeholder='Kuota Prodiakon'
                label='Kuota Prodiakon'
                type='text'
                name='quota'
                trailing='Orang'
                value={massData.quota?.toString()}
                error={massErrorMsg?.quota}
              />
            </div>
            <div className='form-button'>
              <Button buttonType='outline' buttonAppearance='secondary' onClick={handleCloseModal}>
                Batal
              </Button>
              <Button buttonAppearance='success' isDisabled={isMassNotValid}>
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      <div className='frame'>
        <Breadcrumbs paths={breadcrumbPaths} isBack={true} />
        <Headline headlineText={churchDetailData.name} headlineSize='big' />
        <div className='data church-data'>
          <div className='content church-content'>
            <div className='form church-form'>
              <div className='form-section'>
                <div className='form-section-title'>Info Gereja</div>
                <div className='form-row'>
                  <FormField
                    isReadonly={true}
                    placeholder='Nama Gereja'
                    label='Nama Gereja'
                    textAreaSize='large'
                    type='text'
                    name='name'
                    value={churchDetailData.name}
                  />
                  <FormField
                    isReadonly={true}
                    placeholder='Nama Paroki'
                    label='Nama Paroki'
                    textAreaSize='large'
                    type='text'
                    name='parish'
                    value={churchDetailData.parish}
                  />
                </div>
              </div>
              <div className='form-section'>
                <div className='form-section-title'>Alamat Gereja</div>
                <div className='form-row'>
                  <FormField
                    isRequired={true}
                    placeholder='Detail Alamat'
                    label='Detail Alamat'
                    textAreaSize='large'
                    type='textarea'
                    onChangeTextArea={onChangeChurchData}
                    name='address'
                    value={churchDetailData.address}
                    error={errorMsg?.address}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    isRequired={true}
                    onChange={onChangeChurchData}
                    placeholder='Provinsi'
                    label='Provinsi'
                    textAreaSize='large'
                    type='text'
                    name='province'
                    value={churchDetailData.province}
                    error={errorMsg?.province}
                  />
                  <FormField
                    isRequired={true}
                    onChange={onChangeChurchData}
                    placeholder='Kota / Kabupaten'
                    label='Kota / Kabupaten'
                    textAreaSize='large'
                    type='text'
                    name='city'
                    value={churchDetailData.city}
                    error={errorMsg?.city}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    isRequired={true}
                    onChange={onChangeChurchData}
                    placeholder='Kecamatan'
                    label='Kecamatan'
                    textAreaSize='large'
                    type='text'
                    name='district'
                    value={churchDetailData.district}
                    error={errorMsg?.district}
                  />
                  <FormField
                    isRequired={true}
                    onChange={onChangeChurchData}
                    placeholder='Kelurahan'
                    label='Kelurahan'
                    textAreaSize='large'
                    type='text'
                    name='sub_district'
                    value={churchDetailData.sub_district}
                    error={errorMsg?.sub_district}
                  />
                </div>
                <div className='form-row'>
                  <FormField
                    className='church-postal-code'
                    isRequired={true}
                    onChange={onChangeChurchData}
                    placeholder='Kode Pos'
                    label='Kode Pos'
                    textAreaSize='large'
                    type='text'
                    name='zipcode'
                    value={churchDetailData.zipcode}
                    error={errorMsg?.zipcode}
                    maxLength={5}
                  />
                </div>
              </div>
              <div className='form-section'>
                <div className='form-section-title'>Jadwal Misa</div>
                <div className='jadwal-misa-header'>
                  <div className='jadwal-misa-title'>List Misa</div>
                  <Button buttonSize='big' onClick={handleAddMass}>
                    Tambah Misa
                  </Button>
                </div>
                <div className='jadwal-misa-body'>
                  <Table
                    className='jadwal-misa-table'
                    data={data.filter((item) => item.is_deleted === false)}
                    columns={columns}
                    columnBorder={false}
                    isCompact={false}
                    useFooter={false}
                    useFilter={false}
                    useApi
                  />
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

export default GerejaManagement
