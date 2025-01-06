import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo, useState } from 'react'
import classNames from 'classnames'
import { Icon, IconType } from '..'
import './Button.scss'

export type ButtonType =
  | 'filled'
  | 'transparent'
  | 'outline'
  | 'frameless'
  | 'danger'
  | 'success'
  | 'link'
export type ButtonSize = 'big' | 'small' | 'medium'
export type ButtonAppearance = 'primary' | 'destructive' | 'secondary' | 'info' | 'success'
export type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string
  typeIcon?: IconType
  typeIconRight?: IconType
  isDisabled?: boolean
  isLoading?: boolean
  isWarning?: boolean
  isSuccess?: boolean
  buttonType?: ButtonType
  buttonSize?: ButtonSize
  buttonAppearance?: string
  onClick?: (event: React.MouseEvent) => void
  dataTestId?: string
}

const ButtonComponent: React.FC<TButtonProps> & { dataTestIdCounter: number } = ({
  className,
  children,
  typeIcon,
  typeIconRight,
  isDisabled,
  isLoading,
  isWarning,
  isSuccess,
  buttonType = 'filled',
  buttonSize = 'big',
  buttonAppearance = 'primary',
  onClick,
  dataTestId,
  ...rest
}) => {
  const [generatedDataTestId] = useState(dataTestId || `button-${ButtonComponent.dataTestIdCounter++}`)

  const buttonClasses = classNames('Button', className, {
    Button__disabled: isDisabled,
    Button__filled: buttonType === 'filled',
    Button__primary: buttonAppearance === 'primary',
    Button__success: buttonAppearance === 'success',
    Button__destructive: buttonAppearance === 'destructive',
    Button__secondary: buttonAppearance === 'secondary',
    Button__info: buttonAppearance === 'info',
    Button__transparent: buttonType === 'transparent',
    Button__outline: buttonType === 'outline',
    Button__frameless: buttonType === 'frameless',
    Button__link: buttonType === 'link',
    Button__small: buttonSize === 'small',
    Button__big: buttonSize === 'big',
    Button__medium: buttonSize === 'medium',
  })

  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      )
    }
    if (isWarning) {
      return <Icon type={'Danger'} size={buttonSize === 'small' ? 'small' : 'big'} />
    }
    if (isSuccess) {
      return <Icon type={'Success'} size={buttonSize === 'small' ? 'small' : 'big'} />
    }
    return (
      <>
        {typeIcon && <Icon type={typeIcon} size={buttonSize === 'small' ? 'small' : 'big'} />}
        {children && (
          <span className={classNames({
            Button_LeftIcon: typeIcon !== undefined,
            Button_RightIcon: typeIconRight !== undefined,
          })}>
            {children}
          </span>
        )}
        {typeIconRight && (
          <Icon className="Button-right" type={typeIconRight} size={buttonSize === 'small' ? 'small' : 'big'} />
        )}
      </>
    )
  }

  return (
    <button
      className={buttonClasses}
      data-testid={generatedDataTestId}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {renderButtonContent()}
    </button>
  )
}

ButtonComponent.dataTestIdCounter = 0

export const Button = memo(ButtonComponent)
