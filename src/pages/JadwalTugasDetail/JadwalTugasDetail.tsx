import { Breadcrumbs, Button, FormField, Headline, Icon, Modal, Search, Toast } from 'ui-kit'
import './JadwalTugasDetail.scss'
import { useLocation } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import dayGridPlugin from '@fullcalendar/daygrid'
import idLocale from '@fullcalendar/core/locales/id'
import { useEffect, useRef, useState } from 'react'
import { TMassGenerated, TMassSpecialScheduleProdeacon } from 'types/Mass.types'
import { useScaleLoader } from 'utils/getScaleLoader'
import { getAllProdeacon } from 'services/prodeacon.services'
import { useErrorHandler } from 'utils/useErrorHandler'
import {
  createSpecialSchedule,
  deleteSchedule,
  exportSchedule,
  getScheduleById,
  getScheduleByMonth,
  getScheduleByUserId,
  monthlySchedules,
  updateSpecialSchedule,
} from 'services/schedule.services'
import { useAuth } from 'utils/getAuth'
import FilterDropdown, { IFilterDropdownOptions } from 'ui-kit/FilterDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const errorMass = {
  mass_name: '',
  date: '',
  time: '',
  quota: '',
  mass_prodeacons: '',
  mass_prodeacon_coordinator: '',
}

const todayDate = new Date()
const formatDate = (stringDate: any, isFullMonth?: boolean) => {
  const date = new Date(stringDate)

  if (isFullMonth) {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  } else {
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
      .format(date)
      .replace(/\//g, '-')
  }
}

const JadwalTugasDetail = () => {
  const [showLoader, hideLoader] = useScaleLoader()
  const location = useLocation()
  const handleErrorResponse = useErrorHandler()
  const churchId = location.state?.id || ''
  const slug = location.state?.slug || ''
  const breadcrumbPaths = [
    { path: '/dashboard/prodeacon-scheduling', name: 'Jadwal Tugas Prodiakon' },
    {
      path: `/dashboard/prodeacon-scheduling/${slug}`,
      name: 'Info',
    },
  ]
  const userLogin = useAuth()

  const [canRegenerate, setCanRegenerate] = useState(true)
  // get all prodeacons when first time entering the page
  const [prodeacons, setProdeacons] = useState<any[]>([])
  const [prodeaconList, setProdeaconList] = useState<any[]>([])
  const [prodeaconCoordinatorList, setProdeaconCoordinatorList] = useState<any[]>([])

  const fetchAllProdeacons = async () => {
    const params: any = {
      pagination: 'false',
    }

    getAllProdeacon(params)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          setProdeacons(resData)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        //
      })
  }

  const [filters, setFilters] = useState<string>('')
  const [filterCount, setFilterCount] = useState(0)
  const [filterOption, setFilterOption] = useState<IFilterDropdownOptions[]>([])

  const handleRadio = (filterId: string, itemId: string, isChecked: boolean) => {
    if (isChecked) {
      setFilterCount(1)
    } else {
      setFilterCount(0)
    }
    setFilters(itemId)
  }

  // Helper: Reset filters
  const handleReset = () => {
    setFilterCount(0)
    setFilters('')
  }

  useEffect(() => {
    fetchAllProdeacons()
  }, [])

  // separate coordinator and prodeacons
  useEffect(() => {
    const tempProdeaconList = prodeacons.map((item: any) => ({
      label: item.user_registration_number + ' - ' + item.full_name,
      value: item.id,
    }))

    setProdeaconList(tempProdeaconList)

    const tempProdeaconListFilter = prodeacons.map((item: any) => ({
      id: item.id,
      title: item.user_registration_number + ' - ' + item.full_name,
    }))

    setFilterOption([
      {
        id: '1',
        title: 'Prodiakon',
        content: tempProdeaconListFilter,
        isRadio: true,
      },
    ])

    const tempProdeaconCoordinatorList = prodeacons
      .filter((item: any) => item.mass_coordination_flag)
      .map((item: any) => ({
        label: item.user_registration_number + ' - ' + item.full_name,
        value: item.id,
      }))

    setProdeaconCoordinatorList(tempProdeaconCoordinatorList)
  }, [prodeacons])

  const calendarRef = useRef<any>(null)
  const [massSchedules, setMassSchedules] = useState<[]>([])
  const [currentDate, setCurrentDate] = useState({
    month: todayDate.getMonth() + 1,
    fullMonth: '',
    year: todayDate.getFullYear(),
  })
  function setCalendarToDefault() {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.today()
      const date = calendarApi.getDate()
      const fullMonth = date.toLocaleString('id-ID', { month: 'long' })
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      setCurrentDate({ month, fullMonth, year })
    }
  }

  function generateEventClassName(item: any) {
    const massClass =
      item.mass_name === 'Misa Harian'
        ? 'weekday'
        : item.mass_name === 'Misa Sabtu' || item.mass_name === 'Misa Minggu'
        ? 'weekend'
        : 'special';
  
    const flagClass = item.flag === undefined || item.flag ? '' : 'custom-event-disabled';
  
    const quotaClass =
      item.prodeacons_count > 0
        ? item.prodeacons_count > item.quota
          ? 'greater-than-quota'
          : item.prodeacons_count < item.quota
          ? 'less-than-quota'
          : ''
        : '';
  
    return `custom-event custom-event-${massClass} ${flagClass} ${quotaClass}`;
  }

  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  const fetchSchedules = async (month?: any, year?: any) => {
    showLoader()

    if (!month && !year) {
      const date = new Date()
      const fullMonth = date.toLocaleString('id-ID', { month: 'long' })
      month = date.getMonth() + 1
      year = date.getFullYear()
      setCurrentDate({ month, fullMonth, year })
    }

    const params = {
      church_id: churchId,
      month: month,
      year: year,
    }

    let tempSchedule: any = []
    getScheduleByMonth(params)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          tempSchedule = resData.map((item: any) => ({
            id: item.id,
            title: `${item.time.slice(0, 5)} ${item.mass_name}`,
            date: new Date(item.date).toISOString().split('T')[0],
            className: generateEventClassName(item),
            quota: item.quota,
            prodeacons_count: item.prodeacons_count,
          }))
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        hideLoader()
        setMassSchedules(tempSchedule)
        if (isCalendarOpen) {
          setIsCalendarOpen(!isCalendarOpen)
        }

        // Check if user can regenerate or not
        if (tempSchedule.length > 0 && userLogin.user?.role?.name === 'Admin') {
          setCanRegenerate(false)
        } else {
          setCanRegenerate(true)
        }
      })
  }

  const fetchSchedulesByUser = async (id: any, month?: any, year?: any) => {
    showLoader()

    if (!month && !year) {
      const date = new Date()
      const fullMonth = date.toLocaleString('id-ID', { month: 'long' })
      month = date.getMonth() + 1
      year = date.getFullYear()
      setCurrentDate({ month, fullMonth, year })
    }

    const params = {
      month: month,
      year: year,
    }

    let tempSchedule: any = []
    getScheduleByUserId(id, params)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data

          tempSchedule = resData
            .filter((item: any) => item.church_id == churchId)
            .map((item: any) => ({
              id: item.id,
              title: `${item.time.slice(0, 5)} ${item.mass_name}`,
              date: new Date(item.date).toISOString().split('T')[0],
              className: generateEventClassName(item),
              quota: item.quota,
              prodeacons_count: item.prodeacons_count,
            }))
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setMassSchedules(tempSchedule)
        if (isCalendarOpen) {
          setIsCalendarOpen(!isCalendarOpen)
        }
      })
  }

  function checkFilterApplied(month?: any, year?: any) {
    console.log(filters)
    if (filters) {
      fetchSchedulesByUser(filters, month, year)
    } else {
      fetchSchedules(month, year)
    }
  }

  useEffect(() => {
    checkFilterApplied(currentDate.month, currentDate.year)
  }, [filters])

  useEffect(() => {
    // Get the initial month and year on load
    setCalendarToDefault()
  }, [])

  function goNext() {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi()
      calendarApi.next() // Move to the next month
      const date = calendarApi.getDate() // Get the new date after navigation

      // Extract month and year details
      const fullMonth = date.toLocaleString('id-ID', { month: 'long' })
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      // Set the updated date
      setCurrentDate({ month, fullMonth, year })

      // Fetch schedules for the new month
      checkFilterApplied(month, year)
    }
  }

  function goPrev() {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi()
      calendarApi.prev() // Move to the prev month
      const date = calendarApi.getDate() // Get the new date after navigation

      // Extract month and year details
      const fullMonth = date.toLocaleString('id-ID', { month: 'long' })
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      // Set the updated date
      setCurrentDate({ month, fullMonth, year })

      // Fetch schedules for the new month
      checkFilterApplied(month, year)
    }
  }

  function goToSpecificDate(newDate: string) {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi()

      // TODO Replaace the date into actual date
      calendarApi.gotoDate(newDate) // Navigates to January 2026
      const date = calendarApi.getDate() // Get the new date after navigation

      // Extract month and year details
      const fullMonth = date.toLocaleString('id-ID', { month: 'long' })
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      // Set the updated date
      setCurrentDate({ month, fullMonth, year })

      // Fetch schedules for the new month
      checkFilterApplied(month, year)
    }
  }

  const handleActiveStartDateChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (activeStartDate) {
      const tempDate = new Date(activeStartDate)
      const month = tempDate.getMonth() + 1
      const year = tempDate.getFullYear()
      const fullMonth = tempDate.toLocaleString('id-ID', { month: 'long' })

      setCurrentDate({ month, fullMonth, year })
      goToSpecificDate((year + '-' + month.toString().padStart(2, '0')) as string)
    }
  }

  const refreshCalendar = async () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.removeAllEvents() // Clear existing events
      calendarApi.addEventSource(massSchedules) // Add the updated events

      hideLoader()
    }
  }

  useEffect(() => {
    refreshCalendar()
  }, [massSchedules])

  // generate schedule
  const [showConfimationRegenerateModal, setShowConfimationRegenerateModal] = useState(false)
  const generateSchedule = () => {
    showLoader()

    const body = {
      church_id: churchId,
      month: currentDate.month,
      year: currentDate.year,
    }

    monthlySchedules(body)
      .then((res) => {
        if (res.status === 200) {
          Toast('Generate Jadwal', 'success', res.data.message)
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
        Toast('Generate Jadwal', '', error.data.message)
      })
      .finally(() => {
        hideLoader()
        setShowConfimationRegenerateModal(false)
        fetchSchedules(currentDate.month, currentDate.year)
      })
  }

  const handleGenerateSchedule = () => {
    if (massSchedules.length > 0) {
      setShowConfimationRegenerateModal(true)
    } else {
      generateSchedule()
    }
  }

  const handleExportSchedule = async () => {
    const params = {
      church_id: churchId,
      month: currentDate.month,
      year: currentDate.year,
    }

    await exportSchedule(params)
      .then((res) => {
        if (res.status === 200) {
          const blob = new Blob([res.data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          })
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'Jadwal ' + currentDate.fullMonth + ' ' + currentDate.year
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
        } else {
          const text = new TextDecoder().decode(res.data)
          const json = JSON.parse(text)
          const jsonRes = {
            status: json.code,
            data: {
              message: json.message,
            },
          }
          handleErrorResponse(jsonRes)
        }
      })
      .catch((e) => console.log(e))
      .finally(hideLoader)
  }

  const handleRegenerateSchedule = () => {
    generateSchedule()
  }

  const [actionModal, setActionModal] = useState('add')
  const [showMassScheduleModal, setShowMassScheduleModal] = useState(false)
  const [massErrorMsg, setMassErrorMsg] = useState(errorMass)
  const [isMassNotValid, setIsMassNotValid] = useState(false)
  const [selectedMultiValue, setSelectedMultiValue] = useState<string[]>([])
  const [selectedProdeacon, setSelectedProdeacon] = useState<TMassSpecialScheduleProdeacon[]>([])
  const [massData, setMassData] = useState<TMassGenerated>({
    id: '',
    mass_name: '',
    date: '',
    time: '',
    quota: 1,
    mass_prodeacon_coordinator: '',
    generated_at: '',
  })

  // manage mass
  const handleCloseMassScheduleModal = () => {
    setShowMassScheduleModal(false)
    setMassData({
      id: '',
      mass_name: '',
      date: '',
      time: '',
      quota: 1,
      mass_prodeacon_coordinator: '',
    })
    setMassErrorMsg({
      mass_name: '',
      date: '',
      time: '',
      quota: '',
      mass_prodeacons: '',
      mass_prodeacon_coordinator: '',
    })
    setSelectedProdeacon([])
    setSelectedMultiValue([])
  }

  const checkMassError = (name: string, value: string, label: string) => {
    let tempErrorMsg = ''
    if (!value.replace(/^\s+|\s+$/g, '')) {
      tempErrorMsg = label + ' harus diisi'
    } else {
      if (name === 'quota') {
        if (isNaN(Number(value))) tempErrorMsg = label + ' minimal 1'
        if (Number(value) < 1) tempErrorMsg = label + ' minimal 1'
      }
    }

    setMassErrorMsg({ ...massErrorMsg, [name]: tempErrorMsg })
  }

  const handleSelectMultiData = (value: string[]) => {
    setSelectedMultiValue([...value])
    console.log(value.length, massData.quota, value.length > (massData.quota ?? 0))

    let tempErrorMsg = ''
    if (value.length > (massData.quota ?? 0)) {
      tempErrorMsg = 'Petugas prodiakon melebihi kuota'
    } else if (value.length < (massData.quota ?? 0)) {
      tempErrorMsg = 'Petugas prodiakon kurang dari kuota'
    }
    setMassErrorMsg({ ...massErrorMsg, ['mass_prodeacons']: tempErrorMsg })

    setSelectedProdeacon((prev) =>
      // Filter out items that are no longer in `value`
      prev.filter((prodeacon) => {
        if (prodeacon.id) value.includes(prodeacon.id)
      })
    )
  }

  const onChangeSelectProdeaconCoordinator = (value: string) => {
    setMassData({
      ...massData,
      ['mass_prodeacon_coordinator']: value,
    })

    setSelectedProdeacon((prev) => {
      // Filter out any existing coordinator, then add the new coordinator
      return [
        ...prev.filter((prodeacon) => !prodeacon.mass_coordinator), // Remove previous coordinator
        { id: value, mass_coordinator: true }, // Add new coordinator
      ]
    })

    // Also update the multi-select value if the coordinator isn't already in it
    setSelectedMultiValue((prev) => {
      if (!prev.includes(value)) {
        return [...prev, value]
      }
      return prev
    })
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
      [e.target.name]: value,
    })
    checkMassError(e.target.name, value, inputLabel)
  }

  useEffect(() => {
    const isMassDataValid =
      massData.mass_name &&
      !massErrorMsg['mass_name'] &&
      massData.date &&
      !massErrorMsg['date'] &&
      massData.time &&
      !massErrorMsg['time'] &&
      massData.mass_prodeacon_coordinator &&
      !massErrorMsg['mass_prodeacon_coordinator'] &&
      !massErrorMsg['quota'] &&
      Number(massData.quota) > 0
        ? false
        : true

    setIsMassNotValid(isMassDataValid)
  }, [massData, massErrorMsg])

  const handleAddMass = () => {
    setActionModal('add')
    setShowMassScheduleModal(true)
  }

  const submitMassSchedule = () => {
    showLoader()

    const listProdeacons = selectedMultiValue.map((item) => {
      return { id: item, mass_coordinator: false }
    })

    listProdeacons.push({
      id: massData.mass_prodeacon_coordinator ?? '',
      mass_coordinator: true,
    })

    const temp = {
      church_id: churchId,
      mass_name: massData.mass_name,
      date: massData.date,
      time: massData.time,
      quota: massData.quota,
      prodeacons: listProdeacons,
    }

    if (actionModal === 'add') {
      createSpecialSchedule(temp)
        .then((res) => {
          if (res.status === 201) {
            Toast('Tambah Jadwal Misal Berhasil', 'success', res.data.message)
          } else handleErrorResponse(res)
        })
        .catch((err) => {
          console.log(err)
          Toast('Tambah Jadwal Misa Gagal', 'danger', err.data.message)
        })
        .finally(() => {
          hideLoader()
          handleCloseMassScheduleModal()
          checkFilterApplied(currentDate.month, currentDate.year)
        })
    } else if (actionModal === 'edit') {
      updateSpecialSchedule(massData.id, temp)
        .then((res) => {
          if (res.status === 200) {
            Toast('Edit Jadwal Misal Berhasil', 'success', res.data.message)
          } else handleErrorResponse(res)
        })
        .catch((err) => {
          console.log(err)
          Toast('Edit Jadwal Misa Gagal', 'danger', err.data.message)
        })
        .finally(() => {
          hideLoader()
          handleCloseMassScheduleModal()
          checkFilterApplied(currentDate.month, currentDate.year)
        })
    }
  }

  const fetchMassById = async (id: string) => {
    showLoader()

    setSelectedMultiValue([])
    getScheduleById(id)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data

          // Find the coordinator ID and all prodeacon IDs
          let coordinatorId = ''
          const prodeaconIds: any[] = []
          resData.prodeacons.map((item: any) => {
            if (item.mass_coordinator) {
              coordinatorId = item.id // Set the coordinator ID
            } else {
              prodeaconIds.push(item.id)
            }
          })

          setMassData({
            ...massData,
            id: resData.id,
            mass_name: resData.mass_name,
            time: resData.time.slice(0, 5),
            date: formatDate(resData.date),
            quota: resData.quota,
            mass_prodeacon_coordinator: coordinatorId, // Set the coordinator in massData
            generated_at: formatDate(resData.created_at, true),
          })

          if(prodeaconIds.length > 0 && prodeaconIds.length != resData.quota) {
            console.log('asdf')
            let tempMsg = 'Petugas prodiakon melebihi kuota'
            if(prodeaconIds.length < resData.quota) {
              tempMsg = 'Petugas prodiakon kurang dari kuota'
            }

            setMassErrorMsg({
              ...massErrorMsg,
              mass_prodeacons: tempMsg
            })
          }

          setSelectedMultiValue(prodeaconIds)
        } else {
          handleErrorResponse(res)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        hideLoader()
        setActionModal('edit')
        setShowMassScheduleModal(true)
      })
  }

  const handleEditMass = (id: string) => {
    fetchMassById(id)
  }

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDeleteMass = () => {
    setShowDeleteModal(true)
    setShowMassScheduleModal(false)
  }

  const submitDeleteMassSchedule = () => {
    showLoader()

    deleteSchedule(massData.id)
      .then((res) => {
        if (res.status === 200) {
          Toast('Hapus Misa Berhasil', 'success', res.data.message)
          setShowDeleteModal(false)
          handleCloseMassScheduleModal()
        }
      })
      .catch((err) => {
        console.log(err)
        Toast('Hapus Misa Gagal', 'failed', err.data.message)
      })
      .finally(() => {
        fetchSchedules(currentDate.month, currentDate.year)
        hideLoader()
      })
  }

  const renderEventContent = (eventInfo: any) => {
    return (
      <div className='fc-event-schedule' data-test-id={eventInfo.event.id}>
        {eventInfo.event.extendedProps.prodeacons_count > 0 &&
        eventInfo.event.extendedProps.prodeacons_count !== eventInfo.event.extendedProps.quota ? (
          <FontAwesomeIcon icon={faExclamationTriangle} />
        ) : (
          ''
        )}
        <span className='fc-event-title'>{eventInfo.event.title}</span>
      </div>
    )
  }

  return (
    <div className='JadwalTugasDetail'>
      <Modal
        headerText='Hapus Jadwal Misa'
        isShown={showDeleteModal}
        hide={() => setShowDeleteModal(false)}
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
                onClick={() => setShowDeleteModal(false)}
              >
                Batal
              </Button>
              <Button buttonAppearance='destructive' onClick={() => submitDeleteMassSchedule()}>
                Hapus
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        headerText='Generate Ulang Jadwal'
        isShown={showConfimationRegenerateModal}
        hide={() => setShowConfimationRegenerateModal(false)}
        staticBackdrop={false}
      >
        <div>
          <div className='gereja-detail-modal-container'>
            <div className='gereja-detail-modal-subtitle subtitle'>
              Jadwal Misa bulan{' '}
              <strong>
                {currentDate.fullMonth} {currentDate.year}
              </strong>{' '}
              sudah pernah di-generate. Apakah Anda yakin untuk generate ulang Jadwal Misa bulan{' '}
              <strong>
                {currentDate.fullMonth} {currentDate.year}
              </strong>
              ?
            </div>
          </div>
          <div className='form'>
            <div className='form-button'>
              <Button
                buttonType='outline'
                buttonAppearance='secondary'
                onClick={() => setShowConfimationRegenerateModal(false)}
              >
                Batal
              </Button>
              <Button buttonAppearance='primary' onClick={() => handleRegenerateSchedule()}>
                Generate
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        headerText={actionModal === 'add' ? 'Buat Jadwal Baru' : 'Edit Jadwal Misa'}
        modalSize='big'
        isShown={showMassScheduleModal}
        hide={handleCloseMassScheduleModal}
        staticBackdrop={true}
      >
        <div className='gereja-detail-modal-container'>
          <div className='gereja-detail-modal-subtitle subtitle'>
            <div className='form'>
              <div className='form-row'>
                {actionModal === 'add' ? (
                  <FormField
                    isRequired={true}
                    placeholder='Tipe Misa'
                    label='Tipe Misa'
                    type='text'
                    name='mass_name'
                    onChange={onChangeMassData}
                    value={massData.mass_name}
                    error={massErrorMsg?.mass_name}
                  />
                ) : (
                  <FormField
                    isReadonly={true}
                    placeholder='Tipe Misa'
                    label='Tipe Misa'
                    type='text'
                    name='mass_name'
                    value={massData.mass_name}
                  />
                )}
                <div className='FormField'></div>
              </div>
              <div className='form-row'>
                {actionModal === 'add' ? (
                  <FormField
                    isRequired={true}
                    onChange={onChangeMassData}
                    placeholder='Tanggal'
                    label='Tanggal'
                    textAreaSize='large'
                    type='date'
                    name='date'
                    value={massData.date ? massData.date.split('T')[0] : ''}
                    error={massErrorMsg?.date}
                  />
                ) : (
                  <FormField
                    isReadonly={true}
                    placeholder='Tanggal'
                    label='Tanggal'
                    type='text'
                    name='date'
                    value={massData.date}
                  />
                )}

                {actionModal === 'add' ? (
                  <FormField
                    isReadonly={actionModal !== 'add'}
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
                  isRequired={true}
                  label='Koordinator Prodiakon'
                  name='mass_prodeacon_coordinator'
                  placeholder='Pilih Koordinator Prodiakon'
                  value={massData.mass_prodeacon_coordinator}
                  type='select'
                  options={prodeaconCoordinatorList}
                  onChangeSelect={onChangeSelectProdeaconCoordinator}
                  isClear={false}
                  getOptionLabel={'label'}
                  getOptionValue={'value'}
                />
                <div className='FormField'></div>
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
                <FormField
                  className={
                    selectedMultiValue.length > 0 && selectedMultiValue.length != massData.quota
                      ? selectedMultiValue.length > (massData.quota ?? 0)
                        ? 'greater-than-quota'
                        : 'less-than-quota'
                      : ''
                  }
                  label='Petugas Prodiakon'
                  type='multi-select'
                  name='mass_prodeacons'
                  multiValue={selectedMultiValue}
                  placeholder='Pilih Petugas Prodiakon'
                  options={prodeaconList}
                  onChangeMultiSelect={handleSelectMultiData}
                  getOptionLabel={'label'}
                  getOptionValue={'value'}
                  maxData={massData.quota}
                  error={massErrorMsg?.mass_prodeacons}
                />
              </div>
              <div className='form-row form-row-manage-mass'>
                {actionModal === 'edit' ? (
                  <div className='form-button form-button-start flex-column'>
                    <Button buttonAppearance='destructive' onClick={() => handleDeleteMass()}>
                      Hapus
                    </Button>
                    <p>Generate terakhir pada {massData.generated_at}</p>
                  </div>
                ) : (
                  <></>
                )}
                <div className='form-button'>
                  <Button
                    buttonType='outline'
                    buttonAppearance='secondary'
                    onClick={handleCloseMassScheduleModal}
                  >
                    Batal
                  </Button>
                  <Button
                    buttonType='success'
                    buttonAppearance='success'
                    isDisabled={isMassNotValid}
                    onClick={submitMassSchedule}
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className='frame'>
        <Breadcrumbs paths={breadcrumbPaths} isBack={true} />
        <Headline headlineText='Jadwal Tugas Prodiakon' headlineSize='big' />
        {/* <Button onClick={addEvent}>Add Event</Button> */}
        <div className='data church-data'>
          <div className='content prodeacon-schedules-content'>
            <div className='header prodeacon-schedules-header'>
              <div className='calendar-header'>
                <div className='calendar-header-navigation'>
                  <Button
                    className='prodeacon-schedules-calendar-navigation'
                    typeIcon='AngleLeft'
                    onClick={goPrev}
                  />
                  <Button
                    className='prodeacon-schedules-calendar-navigation'
                    typeIcon='AngleRight'
                    onClick={goNext}
                  />
                </div>
                <div className='current-month'>
                  {currentDate.fullMonth} {currentDate.year}
                </div>
                <div className='calendar-month-navigation'>
                  <Button
                    className='prodeacon-schedules-calendar-navigation'
                    typeIcon='Calendar'
                    onClick={toggleCalendar}
                  />
                  {isCalendarOpen && (
                    <Calendar
                      view='year'
                      value={currentDate.year.toString()}
                      onActiveStartDateChange={handleActiveStartDateChange}
                      tileContent={() => null}
                      minDate={new Date(2020, 0, 1)} // Set minimum date to keep the month and year focused
                      maxDate={new Date(2100, 11, 31)}
                    />
                  )}
                </div>
              </div>
              <div className='prodeacon-schedules-actions'>
                <FilterDropdown
                  options={filterOption}
                  functionReset={handleReset}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  functionChecked={() => {}}
                  functionRadio={handleRadio}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  handleDateChange={() => {}}
                  isSearchEnable={true}
                  maxDisplay={3}
                  filterCount={filterCount}
                  filterText={'Prodiakon'}
                />
                <Button
                  buttonType='outline'
                  typeIcon='FileAlt'
                  dataTestId='export-schedules'
                  onClick={handleExportSchedule}
                />
                <Button
                  buttonType='outline'
                  isDisabled={!canRegenerate}
                  typeIcon='Refresh'
                  dataTestId='generate-schedules'
                  onClick={handleGenerateSchedule}
                >
                  Generate Jadwal
                </Button>
                <Button
                  buttonSize='big'
                  typeIcon='PlusAlt'
                  dataTestId='add-mass'
                  onClick={handleAddMass}
                >
                  Tambah Jadwal Misa
                </Button>
              </div>
            </div>
          </div>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            locale={idLocale}
            headerToolbar={false}
            dayHeaderFormat={{ weekday: 'long' }}
            events={massSchedules}
            eventContent={renderEventContent}
            eventClick={(eventClickInfo) => {
              // Access event details
              const { title, startStr, id } = eventClickInfo.event
              handleEditMass(id)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default JadwalTugasDetail
