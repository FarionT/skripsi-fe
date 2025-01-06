import { useState } from 'react'
import { Icon, IconType, Input, SelectMulti, SelectSingle, TextArea } from 'ui-kit'
import classNames from 'classnames'
import './FormField.scss'

export type FormFieldType =
  | 'text'
  | 'password'
  | 'textarea'
  | 'select'
  | 'multi-select'
  | 'toggle'
  | 'number'
  | 'phone_number'
  | 'time'
  | 'date'

export type TFormFieldProps<T, K extends keyof T> = {
  className?: string
  label?: string
  labelTrailing?: string
  name?: string
  type: FormFieldType
  error?: string
  leading?: string
  trailing?: string
  isDisabled?: boolean
  value?: string | T[K]
  warning?: string
  isReadonly?: boolean
  isSuccess?: boolean
  isLoading?: boolean
  textAreaMax?: number
  textAreaSize?: 'small' | 'medium' | 'large'
  inputSize?: 'small' | 'medium' | 'large'
  multiValue?: T[K][]
  options?: T[]
  getOptionValue?: K
  getOptionLabel?: K
  placeholder?: string
  isFocused?: boolean
  isRequired?: boolean
  leadingIcon?: IconType
  trailingIcon?: IconType
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlurTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocusTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChangeTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChangeSelect?: (value: T[K] | '') => void
  onChangeMultiSelect?: (value: T[K][] | []) => void
  handleCopy?: () => void
  isClear?: boolean
  maxLength?: number
  maxData?: number
}

export const FormField = <T, K extends keyof T>({
  className,
  label,
  name,
  type,
  isReadonly,
  isDisabled,
  error,
  leading,
  trailing,
  value,
  warning,
  isSuccess,
  isLoading,
  textAreaMax = 255,
  textAreaSize = 'medium',
  inputSize = 'large',
  multiValue,
  options,
  getOptionValue,
  getOptionLabel,
  placeholder,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
  onChange,
  onBlurTextArea,
  onFocusTextArea,
  onChangeTextArea,
  onChangeSelect,
  onChangeMultiSelect,
  leadingIcon,
  trailingIcon,
  handleCopy,
  isClear,
  maxLength,
  maxData,
}: TFormFieldProps<T, K>) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handlePasswordShow = () => {
    setIsShowPassword((prevState) => !prevState)
  }

  const handleInputType = (inputType: string) => {
    if (inputType === 'text') {
      return 'text'
    }
    if (inputType === 'password') {
      inputType = isShowPassword ? 'text' : 'password'
      return inputType
    }
    if (inputType === 'number' || inputType === 'time' || inputType === 'date') {
      return inputType
    }
  }

  const [textAreaInput, setTextAreaInput] = useState('')

  const renderInput = () => {
    return (
      <Input
        className={classNames({})}
        value={value as string}
        autoComplete='on'
        error={error}
        leading={leading}
        trailing={trailing}
        name={name}
        leadingIcon={leadingIcon}
        readOnly={isReadonly}
        isDisabled={isDisabled}
        placeholder={placeholder}
        type={handleInputType(type)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        isFocused={isFocused}
        data-testid={name}
        data-label={label}
        warning={warning}
        isSuccess={isSuccess}
        inputSize={inputSize}
        maxLength={maxLength}
      />
    )
  }

  return (
    <div
      className={classNames('FormField', className, {
        // FormField__active: isFocused,
        // FormField__error: error,
      })}
    >
      <div className='FormField-Header'>
        <label
          className={classNames('FormField-Label', {
            FormField_LabelLarge: textAreaSize === 'large',
            FormField_LabelMedium: textAreaSize === 'medium',
            FormField_LabelSmall: textAreaSize === 'small',
          })}
          htmlFor={name}
        >
          {label}
          {isRequired && <span className='FormField-LabelRequired'> *</span>}
        </label>
        {type === 'textarea' && textAreaMax && (
          <div className='FormField-TextAreaCount'>
            {value ? (value as string).length.toString() : '0'}/{textAreaMax}
          </div>
        )}
        {type !== 'textarea' && maxData && (
          <div className={classNames('FormField-Count', {
            'FormField-CountError':( multiValue?.length ?? 0) > maxData
          })}>
            {multiValue?.length} / {maxData}
          </div>
        )}
      </div>
      {type === 'text' && (
        <>
          {/* {renderInput()} */}
          <div className='FormField-InputWrapper'>
            {leading && <div className={'FormField-Leading' + inputSize}>{leading}</div>}
            {leadingIcon && (
              <div className={'FormField-LeadingIcon' + inputSize} onClick={handleCopy}>
                <Icon type={leadingIcon} />
              </div>
            )}
            {renderInput()}
            <div className='FormField-RightIcons'>
              {trailingIcon && (
                <div className='FormField-TrailingIcon' onClick={handleCopy}>
                  <Icon type={trailingIcon} />
                </div>
              )}
              {(error || warning || isSuccess || isLoading) && (
                <div
                  className={classNames('FormField-MessageIcon', {
                    FormField_IconLoading: isLoading,
                  })}
                  onClick={handleCopy}
                >
                  <Icon
                    type={
                      error ? 'Danger' : warning ? 'Warning' : isLoading ? 'Loading' : 'Success'
                    }
                  />
                </div>
              )}
            </div>
            {trailing && <div className='FormField-Trailing'>{trailing}</div>}
          </div>
          {error && (
            <div className='ErrorMessage' data-testid={'errorMsg-'+name}>
              {error}
            </div>
          )}
          {warning && (
            <div className='WarningMessage' data-testid='warningMsg'>
              {warning}
            </div>
          )}
        </>
      )}

      {type === 'password' && (
        <>
          <div className='FormField-InputWrapper'>
            {renderInput()}
            <div className='FormField-RightIcons' onClick={handlePasswordShow}>
              {isShowPassword ? <Icon type='EyeCrossed' /> : <Icon type='Eye' />}
            </div>
          </div>
          {error && (
            <div className='ErrorMessage' data-testid='errorPwd'>
              {error}
            </div>
          )}
        </>
      )}

      {type === 'textarea' && (
        <>
          <div className='FormField-TextArea'>
            <TextArea
              className={classNames({
                Input__active: isFocused,
                Input__error: error,
                Input__warning: warning,
                Input__success: isSuccess,
                Input__loading: isLoading,
                input__success: isSuccess,
              })}
              id={name}
              name={name}
              value={value as string}
              error={error}
              warning={warning}
              isSuccess={isSuccess}
              isLoading={isLoading}
              textAreaSize={textAreaSize}
              textAreaMax={textAreaMax}
              isDisabled={isDisabled}
              placeholder={placeholder}
              onFocus={onFocusTextArea}
              onBlur={onBlurTextArea}
              onChange={onChangeTextArea}
              data-testid={name}
              data-label={label}
            />
          </div>
          {/* {error && (
            <div className='ErrorMessage' data-testid={'errorMsg-'+name}>
              {error}
            </div>
          )}
          {warning && (
            <div className='WarningMessage' data-testid='warningMsg'>
              {warning}
            </div>
          )} */}
        </>
      )}

      {type === 'select' && (
        <div className='FormField-InputWrapper'>
          <SelectSingle
            isClear={isClear}
            options={options ? options : []}
            isDisabled={isDisabled}
            value={value as T[K]}
            placeholder={placeholder}
            onchange={onChangeSelect}
            getOptionLabel={getOptionLabel ? getOptionLabel : ('label' as K)}
            getOptionValue={getOptionValue ? getOptionValue : ('id' as K)}
            className='w-full'
            trailingIcon={trailingIcon}
          />
        </div>
      )}

      {type === 'multi-select' && (
        <>
          <div className="FormField-MultiSelectWrapper">
            <SelectMulti
              options={options ? options : []}
              isDisabled={isDisabled}
              value={multiValue}
              placeholder={placeholder}
              onchange={onChangeMultiSelect}
              getOptionLabel={getOptionLabel ? getOptionLabel : ('label' as K)}
              getOptionValue={getOptionValue ? getOptionValue : ('id' as K)}
              className='w-full'
            />
          </div>
          {error && (
            <div className='ErrorMessage' data-testid='errorMultiSelect'>
              {error}
            </div>
          )}        
        </>
      )}

      {type === 'number' && (
        <>
          {/* {renderInput()} */}
          <div className='FormField-InputWrapper'>
            {leading && <div className='FormField-Leading'>{leading}</div>}
            {leadingIcon && (
              <div className='FormField-LeadingIcon' onClick={handleCopy}>
                <Icon type={leadingIcon} />
              </div>
            )}
            {renderInput()}
            {trailingIcon && (
              <div className='FormField-TrailingIcon' onClick={handleCopy}>
                <Icon type={trailingIcon} />
              </div>
            )}
          </div>
          {error && (
            <div className='ErrorMessage' data-testid={'errorMsg-'+name}>
              {error}
            </div>
          )}
        </>
      )}

      {type === 'time' && (
        <>
          {/* {renderInput()} */}
          <div className='FormField-InputWrapper'>
            {leading && <div className='FormField-Leading'>{leading}</div>}
            {leadingIcon && (
              <div className='FormField-LeadingIcon' onClick={handleCopy}>
                <Icon type={leadingIcon} />
              </div>
            )}
            {renderInput()}
            {trailingIcon && (
              <div className='FormField-TrailingIcon' onClick={handleCopy}>
                <Icon type={trailingIcon} />
              </div>
            )}
          </div>
          {error && (
            <div className='ErrorMessage' data-testid={'errorMsg-'+name}>
              {error}
            </div>
          )}
        </>
      )}

      {type === 'date' && (
        <>
          {/* {renderInput()} */}
          <div className='FormField-InputWrapper'>
            {leading && <div className='FormField-Leading'>{leading}</div>}
            {leadingIcon && (
              <div className='FormField-LeadingIcon' onClick={handleCopy}>
                <Icon type={leadingIcon} />
              </div>
            )}
            {renderInput()}
            {trailingIcon && (
              <div className='FormField-TrailingIcon' onClick={handleCopy}>
                <Icon type={trailingIcon} />
              </div>
            )}
          </div>
          {error && (
            <div className='ErrorMessage' data-testid={'errorMsg-'+name}>
              {error}
            </div>
          )}
        </>
      )}
    </div>
  )
}
