import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import './Checkbox.scss'

export type CheckboxBorder = 'default' | 'framed' | 'white' | 'blue';
export type CheckboxType = 'outline' | 'hovered' | 'filled' | 'frameless' | 'transparent';
export type CheckboxSize = 'small' | 'medium' | 'large';
export type LabelPlacement = 'left' | 'right';

export type TCheckboxProps = HTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  isDisabled?: boolean
  isChecked?: boolean
  checkboxBorder?: CheckboxBorder
  checkboxType?: CheckboxType
  checkboxSize?: CheckboxSize
  labelPlacement?: LabelPlacement
  dataID?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxComponent: FC<TCheckboxProps> = ({
  className,
  label,
  isDisabled,
  isChecked,
  checkboxBorder = 'default',
  checkboxType,
  checkboxSize = 'medium',
  labelPlacement = 'right',
  dataID,
  onChange,
  ...rest
}) => {
  return (
    <label
      className={classNames('Checkbox', className, {
        'Checkbox__checked': isChecked,
        'Checkbox__default': checkboxBorder === 'default',
        'Checkbox__framed': checkboxBorder === 'framed',
        'Checkbox__white': checkboxBorder === 'white',
        'Checkbox__blue' : checkboxBorder === 'blue',
        'Checkbox__outline': checkboxType === 'outline',
        'Checkbox__hovered': checkboxType === 'hovered',
        'Checkbox__filled': checkboxType === 'filled',
        'Checkbox__frameless': checkboxType === 'frameless',
        'Checkbox__transparent': checkboxType === 'transparent',
        'Checkbox__small': checkboxSize === 'small',
        'Checkbox__medium': checkboxSize === 'medium',
        'Checkbox__large': checkboxSize === 'large',
        'Checkbox__labelLeft': labelPlacement === 'left',
        'Checkbox__labelRight': labelPlacement === 'right',
        'Checkbox__disabled': isDisabled,
      })}
    >
      {labelPlacement === 'left' && <span className="Checkbox__labelLeft">{label}</span>}
      <input
        type="checkbox"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
        data-id={dataID}
        {...rest}
      />
      {labelPlacement === 'right' && <span className="Checkbox__labelRight">{label}</span>}
    </label>
  )
}

export const Checkbox = CheckboxComponent;