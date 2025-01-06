import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { DropdownPosition } from 'types'
import { Calendar, Icon } from 'ui-kit'
import { getDateISO } from 'utils/getCalendar'
import './Datepicker.scss'

interface DatepickerProps {
  className?: string
  dropdownPosition?: DropdownPosition
  isDisabled?: boolean
  placeholder?: string
  value?: string //single pick date
  isRange?: boolean //date range pick date
  startDate?: string //date range pick date
  endDate?: string //date range pick date
  minDate?: string //disbled date before this date
  maxDate?: string //disbled date after this date
  onDateChanged?: (date: string | null) => void //single pick date
  onDateRangeChanged?: (startDate: string | null, endDate: string | null) => void //date range pick date
}

export const Datepicker = ({
  className,
  dropdownPosition,
  isDisabled,
  placeholder,
  value,
  isRange = true,
  startDate,
  minDate,
  maxDate,
  endDate,
  onDateChanged,
  onDateRangeChanged,
}: DatepickerProps): JSX.Element => {
  const [dateState, setDateState] = useState<string | null>(null)
  const [startDateState, setStartDateState] = useState<string | null>(null)
  const [endDateState, setEndDateState] = useState<string | null>(null)

  const handleDateChange = (date: Date) => {
    const newDate = date ? getDateISO(date) : null
    if (dateState !== newDate) {
      setDateState(newDate)
      onDateChanged && onDateChanged(newDate)
    }
  }

  const handleDateRangeChange = (date: Date[]) => {
    if (date.length > 1) {
      const newDateChange = date ? getDateISO(date[0]) : null
      const endDateChange = date ? getDateISO(date[date.length - 1]) : null
      setStartDateState(newDateChange)
      setEndDateState(endDateChange)
      onDateRangeChanged && onDateRangeChanged(newDateChange, endDateChange)
    } else {
      const newDate = date ? getDateISO(date[0]) : null
      setStartDateState(newDate)
      setEndDateState(null)
      onDateRangeChanged && onDateRangeChanged(newDate, null)
    }
  }

  useEffect(() => {
    setDateState(value ? value : '')
    setStartDateState(startDate ? startDate : '')
    setEndDateState(endDate ? endDate : '')
  }, [value, startDate, endDate])

  return (
    <div
      className={classNames('dropdown ' + dropdownPosition, className, {
        dropdown__isDisabled: isDisabled,
      })}
    >
      <div className='concise-DatePicker' tabIndex={0}>
        <div className='concise-DatePickerPlaceholder'>
          {!dateState && !startDateState ? (
            <>{dateState && startDateState ? null : placeholder}</>
          ) : null}
        </div>
        <div className='concise-DatePickerIcon'>
          <Icon size='small' type={'CaretDown'} />
        </div>
        <div className='concise-DatePickerInput' data-value='asd'>
          {isRange ? (
            <input
              type='text'
              name='rangeDatePicker'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              id='dropdownBasic'
              spellCheck='false'
              aria-autocomplete='list'
              aria-expanded='false'
              aria-haspopup='true'
              value={
                startDateState ? `${startDateState} to ${endDateState ? endDateState : ''}` : ''
              }
              readOnly={true}
            />
          ) : (
            <input
              type='text'
              name='datePicker'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              id='dropdownBasic'
              spellCheck='false'
              aria-autocomplete='list'
              aria-expanded='false'
              aria-haspopup='true'
              value={dateState ? dateState.split('-').join(' / ') : ''}
              readOnly={true}
            />
          )}
        </div>
      </div>
      <div tabIndex={0} className={'dropdown-content'}>
        <Calendar
          date={dateState ? new Date(dateState) : undefined}
          isRange={isRange}
          startDate={startDateState ? new Date(startDateState) : undefined}
          endDate={endDateState ? new Date(endDateState) : undefined}
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate ? new Date(maxDate) : undefined}
          onDateChanged={handleDateChange}
          onDateRangeChanged={handleDateRangeChange}
        />
      </div>
    </div>
  )
}
