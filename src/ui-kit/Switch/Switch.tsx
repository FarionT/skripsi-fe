import classNames from 'classnames'
import { useEffect, useState } from 'react'
import './Switch.scss'

export type SwitchType = 'default' | 'error'
export type SwitchSize = 'large' | 'small'

export interface SelectToggle {
  className?: string
  label?: string
  value?: boolean
  isDisabled?: boolean
  switchType?: SwitchType
  switchSize?: SwitchSize
  onChange?: (value: boolean) => void
}

export const Switch: React.FC<SelectToggle> = ({
  className,
  label,
  value = false,
  isDisabled,
  switchType = 'default',
  switchSize = 'large',
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(value)

  const handleToggle = () => {
    if (isDisabled) {
      return
    }
    const newValue = !isChecked
    setIsChecked(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  useEffect(() => {
    setIsChecked(value)
  }, [value])

  useEffect(() => {
    if (switchType === 'error' && isChecked) {
      const timer = setTimeout(() => {
        setIsChecked(false)
        if (onChange) {
          onChange(false)
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isChecked, switchType, onChange])

  return (
    <div
      className={classNames('switch', className, {
        switch__default: switchType === 'default',
        switch__error: switchType === 'error',
        switch__large: switchSize === 'large',
        switch__small: switchSize === 'small',
        switch__disabled: isDisabled,
      })}
    >
      {label ? <label className='label'>{label}</label> : null}
      <label className={`switch ${isChecked ? 'checked' : ''}`}>
        <input type='checkbox' checked={isChecked} onChange={handleToggle} disabled={isDisabled} />
        <span className='slider round'></span>
      </label>
    </div>
  )
}
