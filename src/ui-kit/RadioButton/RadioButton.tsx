import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import './RadioButton.scss'

export type RadioButtonType = 'default' | 'hovered' | 'error';
export type RadioButtonSize = 'small' | 'medium';
export type LabelPlacement = 'left' | 'right';

export type TRadioButtonProps = HTMLAttributes<HTMLInputElement> & {
  className?: string
  name: string
  label?: string
  isDisabled?: boolean
  isChecked?: boolean
  isError?: boolean
  radioButtonType?: RadioButtonType
  radioButtonSize?: RadioButtonSize
  labelPlacement?: LabelPlacement
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButtonComponent: FC<TRadioButtonProps> = ({
  className,
  name,
  label,
  isDisabled,
  isChecked,
  radioButtonType = 'default',
  radioButtonSize = 'medium',
  labelPlacement = 'right',
  onChange,
  ...rest
}) => {
  return (
    <label
      className={classNames('radioButton', className, {
        'radioButton__checked': isChecked,
        'radioButton__default': radioButtonType === 'default',
        'radioButton__hovered': radioButtonType === 'hovered',
        'radioButton__error': radioButtonType === 'error',
        'radioButton__small': radioButtonSize === 'small',
        'radioButton__medium': radioButtonSize === 'medium',
        'radioButton__labelLeft': labelPlacement === 'left',
        'radioButton__labelRight': labelPlacement === 'right',
      })}
    >
      {labelPlacement === 'left' && <span className="radioButton__labelLeft">{label}</span>}
      <input
        type="radio"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
        name={name}
        {...rest}
      />
      {labelPlacement === 'right' && <span className="radioButton__labelRight">{label}</span>}
    </label>
  )
}

export const RadioButton = RadioButtonComponent;