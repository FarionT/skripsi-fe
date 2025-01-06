import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import './TextArea.scss'
import Icon from 'ui-kit/Icon'

export type TTextAreaProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  className?: string
  name?: string
  type?: string
  error?: string
  isSuccess?: boolean
  value?: string
  isDisabled?: boolean
  textAreaMax?: number
  warning?: string
  isLoading?: boolean
  textAreaSize?: 'small' | 'medium' | 'large'
}

export const TextArea = forwardRef(
  (
    {
      className,
      name,
      error,
      value,
      isDisabled,
      warning,
      isLoading,
      textAreaSize,
      textAreaMax,
      isSuccess,
      ...rest
    }: TTextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className='concise-textarea-parent'>
        <textarea
          className={classNames(className, 'concise-textarea', {
            input__error: error,
            input__loading: isLoading,
            input__warning: warning,
            input__success: isSuccess,
            input__small: textAreaSize === 'small',
            input__medium: textAreaSize === 'medium',
            input__large: textAreaSize === 'large',
          })}
          name={name}
          ref={ref}
          value={value}
          maxLength={textAreaMax}
          disabled={isDisabled}
          {...rest}
          data-testid='textarea'
        />
        {(error || warning || isSuccess || isLoading) && (
          <div
            className={classNames('concise-textarea-icon', {
              'concise-textarea-icon-loading': isLoading,
            })}
          >
            <Icon
              type={error ? 'Danger' : warning ? 'Warning' : isLoading ? 'Loading' : 'Success'}
            />
          </div>
        )}
        {error && (
          <div className='ErrorMessage' data-testid='errorMsg'>
            {error}
          </div>
        )}
        {warning && (
          <div className='WarningMessage' data-testid='warningMsg'>
            {warning}
          </div>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'FormTextArea'
