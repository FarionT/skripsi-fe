import React, { ReactNode, useState } from 'react'
import classNames from 'classnames'
import './Dropdown.scss'
import Icon, { IconType } from 'ui-kit/Icon'

export type DropdownBorder = 'framed' | 'frameless'
export type DropdownType = 'default' | 'primary' | 'danger'

export type TDropdownProps = {
  className?: string
  isDisabled?: boolean
  dropdownBorder?: DropdownBorder
  dropdownType?: DropdownType
  iconType?: IconType
  error?: string
  defaultValue: string
  children: ReactNode
  selected?: string
}

export const DropdownComponent: React.FC<TDropdownProps> = ({
  className,
  isDisabled = false,
  dropdownBorder,
  dropdownType = 'default',
  iconType,
  error,
  defaultValue = 'Default value',
  children,
  selected,
}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={classNames('Dropdown', className, {
        Dropdown__framed: dropdownBorder === 'framed',
        Dropdown__frameless: dropdownBorder === 'frameless',
        Dropdown__default: dropdownType === 'default',
        Dropdown__primary: dropdownType === 'primary',
        Dropdown__danger: dropdownType === 'danger',
        Dropdown__disabled: isDisabled,
      })}
    >
      <div
        onClick={(e) => {
          if (!isDisabled) setIsActive(!isActive)
        }}
        className='Dropdown__container'
      >
        {iconType && <Icon type={iconType} />}
        <div className='Dropdown__label'>{selected ? selected : defaultValue}</div>
        {!isActive ? <Icon type='ChevronDown' /> : <Icon type='ChevronUp' />}
      </div>
      {isActive && <div className='Dropdown__content'>{children}</div>}
      {error && <p className='Dropdown__error'>{error}</p>}
    </div>
  )
}

export const Dropdown = DropdownComponent
