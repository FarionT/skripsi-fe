import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'
import './SelectBasic.scss'

export type TSelectBasicProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  className?: string
  autoComplete?: string
  name?: string
  type?: string
  error?: string
  isDisabled?: boolean
  isFocused?: boolean
  value?: string | number
  options?: (string | number)[]
}

export const SelectBasic = forwardRef(
  (
    {
      className,
      autoComplete,
      name,
      error,
      value,
      isDisabled,
      isFocused,
      options,
      ...rest
    }: TSelectBasicProps,
    ref: ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    return (
      <select
        className={classNames(className, 'concise-SelectBasic', {
          select__active: isFocused,
          select__error: error,
        })}
        autoComplete={autoComplete}
        data-testid='test-select'
        id={name}
        name={name}
        value={value}
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    )
  }
)

SelectBasic.displayName = 'SelectBasic'
