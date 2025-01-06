import './ProdiakonMobile.scss'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { getScheduleByUserId } from 'services/schedule.services'
import { TMassCalendarMobile, TMassCalendarMobileDetail } from 'types/Mass.types'
import { Headline, Tabs, Tab, FormField, Icon } from 'ui-kit'
import { useAuth, useLogout } from 'utils/getAuth'
import { useScaleLoader } from 'utils/getScaleLoader'
import { useErrorHandler } from 'utils/useErrorHandler'
import { Link, useNavigate } from 'react-router-dom'

type DatePiece = Date | null
type CalendarDate = DatePiece | [DatePiece, DatePiece]

const ProdiakonMobile = () => {
  const navigate = useNavigate()
  const [showLoader, hideLoader] = useScaleLoader()
  const handleErrorResponse = useErrorHandler()
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(new Date())
  const { user } = useAuth()
  const logout = useLogout()

  const [actionJadwalTugasPage, setActionJadwalTugasPage] = useState('home')
  const [highlightedDates, setHighlightedDates] = useState<string[]>([])

  // Function to format the selected date
  const formatDate = (
    date: Date,
    isDateOnly: boolean
  ): string | { dayName: string; dayNumber: string } => {
    const dayName = date.toLocaleDateString('id-ID', { weekday: 'short' }) // Extract day name (e.g., "Sen")
    const dayNumber = date.toLocaleDateString('id-ID', { day: '2-digit' }) // Extract day name (e.g., "Sen")
    const yyyy = date.toLocaleDateString('id-ID', { year: 'numeric' }) // Get year
    const mm = date.toLocaleDateString('id-ID', { month: '2-digit' }) // Zero-padded month
    const formattedDate = `${yyyy}-${mm}-${dayNumber}` // Combine into yyyy-mm-dd format

    if (isDateOnly) {
      return formattedDate
    }
    return { dayName, dayNumber }
  }

  // Helper function to check if a date is in the highlightedDates array
  const isHighlighted = (date: any) => {
    const formattedDate = formatDate(date, true) as string
    return highlightedDates.includes(formattedDate)
  }

  // Function to return alias
  function extractAliasAndName(fullName: string, returnType: string) {
    if (!fullName || typeof fullName !== 'string') {
      return { alias: '', name: '' }
    }

    const nameParts = fullName.trim().split(/\s+/) // Split by whitespace and trim extra spaces
    if (returnType === 'alias') {
      const alias = nameParts
        .map((part) => part[0]?.toUpperCase()) // Take the first letter of each word, uppercase
        .join('') // Combine letters
        .slice(0, 2) // Limit to 2 characters

      return alias
    } else if (returnType === 'name') {
      const name = nameParts.slice(0, 2).join(' ') // Take the first 2 words
      return name
    }

    return fullName
  }

  // Get Schedules
  const [currentDate, setCurrentDate] = useState({ month: 0, year: 0 })
  const [massSchedules, setMassSchedules] = useState<TMassCalendarMobile[]>([])
  const fetchSchedules = async (month?: any, year?: any) => {
    console.log('asdf')
    showLoader()

    let tempDate = new Date(year, month - 1)
    if ((!month && !year) || month === new Date().getMonth() + 1) {
      tempDate = new Date()
      month = tempDate.getMonth() + 1
      year = tempDate.getFullYear()
    }

    const params = {
      month: month,
      year: year,
    }

    const tempDateHighlighted: any = []
    const tempSchedules: any = []
    getScheduleByUserId(user?.id, params)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.data
          resData.forEach((item: any) => {
            const tempDate = new Date(item.date).toISOString().split('T')[0]

            if (item.flag && !tempDateHighlighted.includes(tempDate)) {
              tempDateHighlighted.push(tempDate) // Only push if not already included
            }

            // Find an existing date object
            const existing = tempSchedules.find((temp: any) => temp.date === tempDate)
            const coordinator = item.prodeacons.find((temp: any) => temp.mass_coordinator)
            const tempSchedule = {
              id: item.id,
              user_flag: item.flag,
              mass_name: item.mass_name,
              quota: item.quota,
              time: item.time.slice(0, 5),
              church_name: item.church_name,
              coordinator: coordinator
                ? {
                    id: coordinator.id,
                    user_registration_number: coordinator.user_registration_number,
                    name: extractAliasAndName(coordinator.full_name, 'name'),
                    nick_name: coordinator.nick_name,
                  }
                : null,
              prodeacons: item.prodeacons
                ? item.prodeacons
                    .filter((temp: any) => !temp.mass_coordinator)
                    .sort(
                      (a: any, b: any) => a.user_registration_number - b.user_registration_number
                    )
                    .map((currItem: any) => ({
                      id: currItem.id,
                      user_registration_number: currItem.user_registration_number,
                      name: extractAliasAndName(currItem.full_name, 'name'),
                      nick_name: currItem.nick_name,
                    }))
                : [],
              full_date: new Date(item.date).toLocaleDateString('id-ID', {
                weekday: 'long', // Full weekday name
                day: '2-digit', // Two-digit day
                month: 'long', // Full month name
                year: 'numeric', // Four-digit year
              }),
              class_name:
                item.mass_name === 'Misa Harian'
                  ? 'mass-weekday'
                  : item.mass_name === 'Misa Sabtu' || item.mass_name === 'Misa Minggu'
                  ? 'mass-weekend'
                  : 'mass-special',
            }
            if (!existing) {
              // If not found, add a new date object
              tempSchedules.push({
                date: tempDate,
                schedules: [tempSchedule],
              })
            } else {
              // If found, add to the schedules array
              existing.schedules.push(tempSchedule)

              // Sort the schedules by time
              existing.schedules.sort((a: any, b: any) => {
                if (a.time < b.time) return -1
                if (a.time > b.time) return 1
                return 0
              })
            }
          })
        } else handleErrorResponse(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setMassSchedules(tempSchedules)
        setHighlightedDates(tempDateHighlighted)
        setSelectedDate(tempDate)
        hideLoader()
      })
  }

  useEffect(() => {
    const tempDate = new Date()
    const month = tempDate.getMonth() + 1
    const year = tempDate.getFullYear()
    setCurrentDate({ month: month, year: year })
    setSelectedDate(tempDate)
    fetchSchedules()
  }, [])

  useEffect(() => {
    //
  }, [massSchedules])

  const [detailSchedule, setDetailSchedule] = useState<TMassCalendarMobileDetail>()
  const [currentDateSchedule, setCurrentDateSchedule] = useState<TMassCalendarMobile | null>(null)
  const fetchMassByDate = async (date: any) => {
    const tempDate = formatDate(date, true) as string
    const schedule = massSchedules.find((item: any) => item.date === tempDate)
    setCurrentDateSchedule(schedule || null) // Set the schedule or null if not found
  }

  const listUserCurrentDateSchedule =
    currentDateSchedule &&
    currentDateSchedule.schedules.filter((item) => item.user_flag).length > 0 ? (
      currentDateSchedule.schedules
        .filter((item) => item.user_flag)
        .map((item, index) => (
          <div
            key={index}
            className={`jadwal-tugas-item ${item.class_name}`}
            data-test-id={item.id}
            onClick={() => {
              setActionJadwalTugasPage('detail')
              setDetailSchedule(item)
            }}
          >
            <div className='jadwal-tugas-item-header'>
              <div className='jadwal-tugas-mass-name'>{item.mass_name} (bertugas)</div>
              <div className='jadwal-tugas-time'>{item.time}</div>
            </div>
            <div className='jadwal-tugas-church-name'>{item.church_name}</div>
          </div>
        ))
    ) : (
      <div className='jadwal-tugas-item no-data'>Tidak ada tugas pada hari ini</div>
    )

  const detailCurrentDateSchedule = currentDateSchedule
    ? currentDateSchedule?.schedules
        .filter((item) => !item.user_flag)
        .map((item, index) => (
          <div
            key={index}
            className={`jadwal-tugas-item ${item.class_name}`}
            data-test-id={item.id}
            onClick={() => {
              setActionJadwalTugasPage('detail')
              setDetailSchedule(item)
            }}
          >
            <div className='jadwal-tugas-item-header'>
              <div className='jadwal-tugas-mass-name'>
                {item.mass_name}
              </div>
              <div className='jadwal-tugas-time'>{item.time}</div>
            </div>
            <div className='jadwal-tugas-church-name'>{item.church_name}</div>
          </div>
        ))
    : ''

  // Get the formatted date
  const { dayName, dayNumber } = formatDate(selectedDate as Date, false) as {
    dayName: string
    dayNumber: string
  }
  useEffect(() => {
    fetchMassByDate(selectedDate)
  }, [selectedDate])

  const handleActiveStartDateChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (activeStartDate) {
      const tempDate = formatDate(activeStartDate, true) as string
      const month = Number(tempDate.split('-')[1])
      const year = Number(tempDate.split('-')[0])

      if (month === new Date().getMonth() + 1) {
        setSelectedDate(new Date())
      } else {
        setSelectedDate(new Date(year, month - 1))
      }

      setCurrentDate({ month: month, year: year })
      fetchSchedules(month, year)
    }
  }

  return (
    <div className='prodiakon-mobile'>
      {user?.role?.name !== 'Viewer' ? (
        <div className='prodiakon-mobile-header'>
          <span className='prodiakon-mobile-navigation'
            onClick={() =>
              actionJadwalTugasPage === 'detail'
                ? setActionJadwalTugasPage('home')
                : navigate('/dashboard')
            }
          >
            <Icon type='AngleLeft' size='big'></Icon> Back to{' '}
            {actionJadwalTugasPage === 'detail' ? 'Calendar' : 'Dashboard'}
          </span>
        </div>
      ) : (
        ''
      )}
      <Tabs onClick={() => actionJadwalTugasPage === 'detail' && setActionJadwalTugasPage('home')}>
        <Tab title='Jadwal Tugas' leftIcon='Calendar'>
          {actionJadwalTugasPage === 'home' ? (
            <div className='jadwal-tugas-container'>
              <div className='jadwal-tugas-calendar-container'>
                <Headline headlineText={'Jadwal Tugas ' + user?.full_name} headlineSize='big' />
                <Calendar
                  className='jadwal-tugas-calendar'
                  onChange={(date) => setSelectedDate(date)}
                  value={selectedDate}
                  locale='id-ID'
                  showNeighboringMonth={false}
                  tileContent={({ date, view }) =>
                    view === 'month' && isHighlighted(date) ? (
                      <span className='event-dot'></span>
                    ) : null
                  }
                  onActiveStartDateChange={handleActiveStartDateChange}
                />
              </div>
              <div className='jadwal-tugas-data'>
                <div className='jadwal-tugas-date'>
                  <span className='day'>{dayName}</span>
                  <span className='date'>{dayNumber}</span>
                </div>
                <div className='jadwal-tugas-list'>
                  {currentDateSchedule ? (
                    <>
                      <div className='jadwal-tugas-list-mine'>
                        <div className='jadwal-tugas-list-title'>Jadwal Saya :</div>
                        <div className='jadwal-tugas-list-items'>{listUserCurrentDateSchedule}</div>
                      </div>
                      <div className='jadwal-tugas-list-other'>{detailCurrentDateSchedule}</div>
                    </>
                  ) : (
                    'Tidak Ada Jadwal Hari Ini'
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className='jadwal-tugas-detail-container'>
              <div className='jadwal-tugas-detail-header jadwal-tugas-detail-section'>
                <div className='mass-name'>{detailSchedule?.mass_name}</div>
                <div className='mass-detail'>
                  <div className='mass-date'>
                    <Icon type='CalendarAlt' /> <span>{detailSchedule?.full_date}</span>
                  </div>
                  <div className='mass-time'>
                    <Icon type='ClockAlt' /> <span>{detailSchedule?.time}</span>
                  </div>
                  <div className='mass-location'>
                    <Icon type='Location' /> <span>{detailSchedule?.church_name}</span>
                  </div>
                </div>
              </div>
              <div className='jadwal-tugas-detail-coordinator jadwal-tugas-detail-section'>
                <div className='jadwal-tugas-detail-section-title'>Ketua Koordinator</div>
                {detailSchedule?.coordinator ? (
                  <div className='prodeacon-name'>
                    <div className='registration-number'>
                      {detailSchedule?.coordinator?.user_registration_number
                        .toString()
                        .padStart(3, '0')}
                    </div>
                    <div className='name'>{detailSchedule?.coordinator?.nick_name}</div>
                  </div>
                ) : (
                  <span>Belum ditentukan</span>
                )}
              </div>
              <div className='jadwal-tugas-detail-coordinator jadwal-tugas-detail-section'>
                <div className='jadwal-tugas-detail-section-title'>
                  Petugas Prodiakon
                  <span className='total-quota'>{detailSchedule?.prodeacons.length} orang</span>
                </div>
                {detailSchedule?.prodeacons && detailSchedule.prodeacons.length > 0 ? (
                  <div className='jadwal-tugas-detail-petugas'>
                    {detailSchedule?.prodeacons?.map((currItem: any, index: number) => (
                      <div className='prodeacon-name' key={index}>
                        <div className='registration-number'>
                          {currItem?.user_registration_number.toString().padStart(3, '0')}
                        </div>
                        <div className='name'>{currItem?.nick_name}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span>Belum ditentukan</span>
                )}
              </div>
            </div>
          )}
        </Tab>
        <Tab title='Profil' leftIcon='UserAlt'>
          <div className='profil-container'>
            <Headline headlineText={'Profil Prodiakon'} headlineSize='big' />
            <div className='profil-detail'>
              <FormField
                isDisabled={true}
                placeholder='No. Registrasi'
                label='No. Registrasi'
                textAreaSize='large'
                type='text'
                value={user?.user_registration_number}
              />
              <FormField
                isDisabled={true}
                placeholder='Nama'
                label='Nama'
                textAreaSize='large'
                type='text'
                value={user?.full_name}
              />
              <FormField
                isDisabled={true}
                placeholder='Email'
                label='Email'
                textAreaSize='large'
                type='text'
                value={user?.email}
              />
              <FormField
                isDisabled={true}
                placeholder='No. Whatsapp'
                label='No. Whatsapp'
                textAreaSize='large'
                leading='+62'
                type='text'
                value={user?.phone_number}
              />
              <FormField
                isDisabled={true}
                placeholder='Status'
                label='Status'
                textAreaSize='large'
                type='text'
                value={user?.active ? 'Aktif' : 'Tidak Aktif'}
              />
              <div
                className='profile-logout'
                onClick={() => {
                  logout()
                }}
              >
                <Icon type='LogoutAlt' />
                Logout
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default ProdiakonMobile
