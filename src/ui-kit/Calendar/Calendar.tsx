import { useEffect, useState, Fragment, MouseEvent, useMemo } from 'react'
import calendar, {
  isDate,
  isSameDay,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
  TDays,
} from 'utils/getCalendar'
import './Calendar.scss'
import { Button } from 'ui-kit'

interface CalendarProps {
  date?: Date
  startDate?: Date
  endDate?: Date
  isRange?: boolean
  minDate?: Date
  maxDate?: Date
  onDateChanged?: (date: Date) => void
  onDateRangeChanged?: (date: Date[]) => void
}

interface DateState {
  current: Date | null
  selectedDates: Date[]
  month: number
  year: number
}

export const Calendar = ({
  date,
  startDate,
  endDate,
  isRange,
  minDate,
  maxDate,
  onDateChanged,
  onDateRangeChanged,
}: CalendarProps): JSX.Element => {
  const [yearSelection, setYearSelection] = useState(false)
  const [dateState, setDateState] = useState<DateState>({
    current: null,
    selectedDates: [],
    month: 0,
    year: 0,
  })

  const getDatesBetween = (startDateBetween: Date, endDateBetween: Date): Date[] => {
    const dates = []
    const currentDate = new Date(startDateBetween)

    while (currentDate <= endDateBetween) {
      dates.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return dates
  }

  const changeYear = (year: number): void => {
    setYearSelection(false)
    setDateState((prevDateState) => ({
      ...prevDateState,
      year: year,
    }))
  }

  const addDateToState = (dateToState: Date): void => {
    const isDateObject = isDate(dateToState)
    setDateState((prevDateState) => {
      return {
        ...prevDateState,
        current: isDateObject ? dateToState : null,
      }
    })
  }

  const addDateRangeToState = (startDateToState: Date, endDateToState: Date): void => {
    const dateBetween = getDatesBetween(startDateToState, endDateToState)
    setDateState((prevDateState) => {
      return {
        ...prevDateState,
        selectedDates: dateBetween.length > 1 ? dateBetween : [],
      }
    })
  }

  useEffect(() => {
    const tempDate = new Date()
    setDateState((prevDateState) => {
      return {
        ...prevDateState,
        month: tempDate.getMonth() + 1,
        year: tempDate.getFullYear(),
      }
    })
  }, [])

  useEffect(() => {
    if (date) {
      addDateToState(date)
    }
    if (startDate && endDate) {
      addDateRangeToState(startDate, endDate)
    }
  }, [date, startDate, endDate])

  const getCalendarDates = useMemo(() => {
    const { current, month, year } = dateState
    const calendarMonth = month || (current ? current.getMonth() + 1 : 1)
    const calendarYear = year || (current && current.getFullYear())!
    const allDates = calendar(calendarMonth, calendarYear)
    return allDates
  }, [dateState, minDate, maxDate])

  const gotoDate =
    (go2date: Date) =>
    (evt: MouseEvent<HTMLDivElement>): void => {
      evt.preventDefault()
      const { current, selectedDates } = dateState

      if (isRange) {
        let startDateSelected: Date | null = selectedDates ? selectedDates[0] : new Date()
        let endDateSelected: Date | null
        console.log('selectedDates', selectedDates, go2date)
        if (selectedDates.length === 0 || selectedDates.length > 1) {
          startDateSelected = go2date
          endDateSelected = go2date
        } else if (startDateSelected && go2date > startDateSelected) {
          endDateSelected = go2date
        } else {
          startDateSelected = go2date
          endDateSelected = go2date
        }
        const rangeDates = getDatesBetween(startDateSelected, endDateSelected)
        console.log('rangeDates', rangeDates)
        setDateState((prevDateState) => ({
          ...prevDateState,
          selectedDates: rangeDates,
          current: go2date,
        }))
        onDateRangeChanged && onDateRangeChanged(rangeDates)
      } else {
        !(current && isSameDay(go2date, current)) && addDateToState(go2date)
        onDateChanged && onDateChanged(go2date)
      }
    }

  const changeMonth = (direction: 'prev' | 'next'): void => {
    const { month, year } = dateState
    const newMonth =
      direction === 'prev' ? getPreviousMonth(month, year) : getNextMonth(month, year)
    setDateState((prevDateState) => ({
      ...prevDateState,
      month: newMonth.month,
      year: newMonth.year,
    }))
  }

  const renderYearSelection = (): JSX.Element => {
    const currYear = new Date().getFullYear()
    const years = Array.from({ length: 54 }, (_, index) => currYear - 52 + index)

    return (
      <div className='calendar-years'>
        {years.map((y) => (
          <div className='calendar-years-cell' key={y} onClick={() => changeYear(y)}>
            {y}
          </div>
        ))}
      </div>
    )
  }

  const gotoPreviousMonth = () => changeMonth('prev')
  const gotoNextMonth = () => changeMonth('next')

  const renderMonthAndYear = useMemo(() => {
    const { month, year } = dateState
    const monthname = Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))]
    let isDisabledLeft = false
    let isDisabledRight = false

    // Check if the date is disabled
    if (minDate) {
      const firstDateOfMonth = new Date(year, month - 1, 1)
      isDisabledLeft = firstDateOfMonth <= minDate
    }

    if (maxDate) {
      const lastDateOfMonth = new Date(year, month, 0)
      isDisabledRight = lastDateOfMonth >= maxDate
    }

    return (
      <div className='calendar-header'>
        <Button
          buttonType='frameless'
          onClick={() => {
            if (!isDisabledLeft) {
              gotoPreviousMonth()
            }
          }}
          typeIcon='AngleLeft'
        />
        <div className='calendar-month'>
          <Button
            buttonType='frameless'
            onClick={() => {
              setYearSelection(!yearSelection)
            }}
          >
            {monthname} {year}
          </Button>
        </div>
        <Button
          buttonType='frameless'
          onClick={() => {
            if (!isDisabledRight) {
              gotoNextMonth()
            }
          }}
          typeIcon='AngleRight'
        />
      </div>
    )
  }, [dateState, yearSelection])

  const renderDayLabel = (day: TDays, index: number): JSX.Element => {
    const daylabel = WEEK_DAYS[day].toUpperCase().charAt(0)
    return (
      <div key={daylabel + index} className='calendar-day' data-index={index}>
        {daylabel}
      </div>
    )
  }

  const renderCalendarDate = (dateArray: (string | number)[], index: number): JSX.Element => {
    const { current, selectedDates } = dateState
    const _date = new Date(dateArray.join('-'))
    const isToday = isSameDay(_date)
    let isSelected
    let isDisabled = false
    let calendarDateClass = ''
    if (isRange) {
      isSelected = selectedDates.some((selectedDate) => isSameDay(_date, selectedDate))
      calendarDateClass = isToday ? 'today-calendar-date' : calendarDateClass
      calendarDateClass = isSelected ? 'highlighted-calendar-date' : calendarDateClass
    } else {
      const isCurrent = current && isSameDay(_date, current)
      calendarDateClass = isCurrent
        ? 'highlighted-calendar-date'
        : isToday
        ? 'today-calendar-date'
        : 'calendar-date'
    }

    // Check if the date is disabled
    if ((minDate && _date < minDate) || (maxDate && _date > maxDate)) {
      isDisabled = true
    }

    const onClick = gotoDate(_date)
    const props = { index, onClick, title: _date.toDateString() }

    const dateComponent = (
      <div
        key={getDateISO(_date)}
        className={`calendar-date ${calendarDateClass} ${isDisabled ? 'calendar-disabled' : ''}`}
        {...props}
      >
        {_date.getDate()}
      </div>
    )
    return dateComponent
  }

  return (
    <div className='calendar-container'>
      {renderMonthAndYear}
      {yearSelection ? (
        <Fragment>{renderYearSelection()}</Fragment>
      ) : (
        <div className='calendar-grid'>
          <Fragment>{(Object.keys(WEEK_DAYS) as TDays[]).map(renderDayLabel)}</Fragment>
          <Fragment>{getCalendarDates.map(renderCalendarDate)}</Fragment>
        </div>
      )}
    </div>
  )
}
