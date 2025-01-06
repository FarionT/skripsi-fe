import { DropdownPosition } from 'types'
import React, { useState } from 'react'
import { Icon } from 'ui-kit'
import classNames from 'classnames'
import './SelectSingle.scss'

type TSelectSingleProps<T, K extends keyof T> = {
  isDisabled?: boolean
  isClear?: boolean
  value?: T[K]
  className?: string
  dropdownPosition?: DropdownPosition
  placeholder?: string
  options: T[]
  getOptionValue: K
  getOptionLabel: K
  onchange?: (value: T[K] | '') => void
  trailingIcon?: any
}

export const SelectSingle = <T, K extends keyof T>({
  isDisabled = false,
  isClear = true,
  value,
  className,
  dropdownPosition = '',
  placeholder = 'placeholder',
  options,
  getOptionValue,
  getOptionLabel,
  onchange,
  trailingIcon,
}: TSelectSingleProps<T, K>) => {
  const [query, setQuery] = useState('')

  const selectedOption: T | undefined = options?.find(
    (option: T) => option[getOptionValue] == value
  )

  const filter = (optionsTemp: T[]) => {
    return optionsTemp.filter(
      (option) => (option[getOptionLabel] as string).toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }

  const onSelectChild = (selectedChildObj: T | null) => {
    setQuery('')
    onchange ? (selectedChildObj ? onchange(selectedChildObj[getOptionValue]) : onchange('')) : null
    if (document.activeElement instanceof HTMLElement) {
      ;(document.activeElement as HTMLElement).blur()
    }
  }

  return (
    <div
      className={classNames('dropdown ' + dropdownPosition, className, {
        dropdown__isDisabled: isDisabled,
      })}
    >
      <div className='concise-SelectSingle' tabIndex={0}>
        <div className='concise-SelectSinglePlaceholder'>
          {!query ? (
            <>
              {selectedOption && typeof selectedOption === 'object' ? (
                <span className='concise-SelectSingleLabel'>
                  {selectedOption[getOptionLabel] as React.ReactNode}
                </span>
              ) : (
                placeholder
              )}
            </>
          ) : null}
        </div>
        <div className={`concise-SelectSingleIcon ${trailingIcon}`}>
          <Icon size='small' type={trailingIcon ?? 'ChevronDown'} />
        </div>
        <div className='concise-SelectSingleInput'>
          <input
            type='text'
            name='searchTerm'
            autoCapitalize='none'
            autoComplete='off'
            autoCorrect='off'
            id='dropdownBasic'
            spellCheck='false'
            aria-autocomplete='list'
            aria-expanded='false'
            aria-haspopup='true'
            role='combobox'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
      </div>
      <div className={'menu p-0'}>
        <ul tabIndex={0} className={'dropdown-content w-full'}>
          {isClear && !query && filter(options).length > 0 && (
            <li key='items-clear' onClick={() => onSelectChild(null)}>
              <div className={'concise-SelectSingleChild'}>Select here to clear</div>
            </li>
          )}
          {options &&
            getOptionValue &&
            getOptionLabel &&
            filter(options).map((option, index) => (
              <li key={index} onClick={() => onSelectChild(option)}>
                <div
                  className={`concise-SelectSingleChild ${
                    value === option[getOptionValue] ? 'concise-SelectSingleChildActive' : ''
                  }`}
                >
                  {option[getOptionLabel] as React.ReactNode}
                </div>
              </li>
            ))}
          {options && getOptionValue && getOptionLabel && filter(options).length === 0 && (
            <li key='no-items-found'>
              <div className={'concise-SelectSingleChild'}>No items found</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
