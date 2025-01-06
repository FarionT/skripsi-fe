import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import './Input.scss'
import { IconType } from 'ui-kit'

export type TInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string
  autoComplete?: string
  name?: string
  type?: string
  error?: string
  leading?: string
  leadingIcon?: IconType
  trailing?: string
  isDisabled?: boolean
  isFocused?: boolean
  value?: string
  inputSize?: 'small' | 'medium' | 'large'
  warning?: string
  isSuccess?: boolean
  invert?: boolean
}

export const Input = forwardRef(
  (
    {
      className,
      autoComplete,
      name,
      type,
      error,
      leading,
      leadingIcon,
      trailing,
      value,
      isDisabled,
      isFocused,
      inputSize,
      warning,
      isSuccess,
      invert,
      ...rest
    }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={classNames(className, 'concise-input', {
          input__active: isFocused,
          input__error: error,
          input__leading: leading,
          input__leadingIcon: leadingIcon,
          input__trailing: trailing,
          input__leadingNTrailing: leading && trailing,
          input__warning: warning,
          input__success: isSuccess,
          input__invert: invert,
          input__large: inputSize == 'large',
          input__medium: inputSize == 'medium',
          input__small: inputSize == 'small',
        })}
        autoComplete={autoComplete}
        data-testid='test-input'
        name={name}
        type={type}
        ref={ref}
        value={value}
        disabled={isDisabled}
        {...rest}
        id={name}
      />
    )
  }
)

Input.displayName = 'Input'
