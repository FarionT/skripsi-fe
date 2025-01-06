import React, { useState } from 'react'
import classNames from 'classnames'
import './DropdownCheckbox.scss'
import Icon, { IconType } from 'ui-kit/Icon'

export type DropdownCheckboxType = 'default' | 'primary' | 'danger'

export type TDropdownCheckboxProps = {
  className?: string
  isDisabled?: boolean
  dropdownCheckboxType?: DropdownCheckboxType
  iconType?: IconType
  error?: string
  onChange?: (value: string[]) => void
}

export const DropdownCheckboxComponent: React.FC<TDropdownCheckboxProps> = ({
  className,
  isDisabled,
  dropdownCheckboxType = 'default',
  iconType,
  error,
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isActive, setIsActive] = useState(false)
  const options = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4']

  const toggleOption = (option: string) => {
    const selectedIndex = selectedOptions.indexOf(option)
    let newSelectedOptions: string[] = []

    if (selectedIndex === -1) {
      newSelectedOptions = [...selectedOptions, option]
    } else {
      newSelectedOptions = selectedOptions.filter((item) => item !== option)
    }

    setSelectedOptions(newSelectedOptions)
    if (onChange) {
      onChange(newSelectedOptions)
    }
  }

  return (
    <div
      className={classNames('DropdownCheckbox', className, {
        DropdownCheckbox__default: dropdownCheckboxType === 'default',
        DropdownCheckbox__primary: dropdownCheckboxType === 'primary',
        DropdownCheckbox__danger: dropdownCheckboxType === 'danger',
        DropdownCheckbox__disabled: isDisabled,
      })}
    >
      <div
        onClick={() => {
          if (!isDisabled) setIsActive(!isActive)
        }}
        className='DropdownCheckbox__container'
      >
        {iconType && <Icon type={iconType} />}
        <div className='DropdownCheckbox__label'>
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Dropdown Option'}
        </div>
        {!isActive ? <Icon type='ChevronDown' /> : <Icon type='ChevronUp' />}
      </div>
      {isActive && (
        <div className='DropdownCheckbox__content'>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={classNames('DropdownCheckbox__item', {
                DropdownCheckbox__itemSelected: selectedOptions.includes(option),
              })}
            >
              <input
                type='checkbox'
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
                className='DropdownCheckbox__input'
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
      {error && <p className='Dropdown__error'>{error}</p>}
    </div>
  )
}

export const DropdownCheckbox = DropdownCheckboxComponent
