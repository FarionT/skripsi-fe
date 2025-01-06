import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'utils/redux'
import { Button, Icon, IconType } from 'ui-kit'
import ReactDOM from 'react-dom'
import './Modal.scss'
import classNames from 'classnames'

export type TModalType = 'default' | 'frameless'

export type TModalProps = {
  isShown: boolean
  hide: () => void
  isDismissable?: boolean
  topAppearance?: boolean
  headerSubtitle?: string
  headerText: string
  headerIcon?: IconType
  children: ReactNode
  footerPrimaryButton?: string
  footerSecondaryButton?: string
  footerPrimaryIcon?: IconType
  footerSecondaryIcon?: IconType
  onFooterPrimaryButtonClick?: (event: React.MouseEvent) => void
  onFooterSecondaryButtonClick?: (event: React.MouseEvent) => void
  onFooterPrimaryIconClick?: (event: React.MouseEvent) => void
  onFooterSecondaryIconClick?: (event: React.MouseEvent) => void
  staticBackdrop?: boolean
  modalSize?: string
}

export const Modal: React.FC<TModalProps> = ({
  isShown,
  hide,
  isDismissable = true,
  topAppearance = false,
  headerSubtitle,
  headerText,
  headerIcon,
  children,
  footerPrimaryButton,
  footerSecondaryButton,
  footerPrimaryIcon,
  footerSecondaryIcon,
  onFooterPrimaryButtonClick,
  onFooterSecondaryButtonClick,
  onFooterPrimaryIconClick,
  onFooterSecondaryIconClick,
  staticBackdrop = true,
  modalSize = 'default',
}) => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme)

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
  }, [isShown])

  const modal = (
    <div className={`theme-${currentTheme}`}>
      <div className='conciseModal__backdrop' onClick={staticBackdrop ? undefined : hide} />
      <div
        className={classNames('conciseModal', { conciseModalTop: topAppearance, conciseModalBig: modalSize === 'big' })}
        aria-modal
        aria-labelledby={headerText}
        tabIndex={-1}
        role='dialog'
      >
        <div className='conciseModal__header'>
          <div className='conciseModal__headerTitle'>
            {headerSubtitle && <div className='conciseModal__headerSubtitle'>{headerSubtitle}</div>}
            {headerIcon && (
              <Icon className='conciseModal__headerIcon' size='big' type={headerIcon} />
            )}
            {headerText}
          </div>
          {isDismissable && (
            <div className='conciseModal__headerClose' onClick={hide}>
              <Icon size='medium' type='Cross' />
            </div>
          )}
        </div>
        <div className='conciseModal__content'>{children}</div>
        {(footerPrimaryButton || footerSecondaryButton) && (
          <div className='conciseModal__footer'>
            <div className='conciseModal__footerIcon'>
              {footerSecondaryIcon && (
                <div
                  className='conciseModal__footerIconSecondary'
                  onClick={onFooterPrimaryIconClick}
                >
                  <Icon type={footerSecondaryIcon} />
                </div>
              )}
              {footerPrimaryIcon && (
                <div
                  className='conciseModal__footerIconPrimary'
                  onClick={onFooterSecondaryIconClick}
                >
                  <Icon type={footerPrimaryIcon} />
                </div>
              )}
            </div>
            <div className='conciseModal__footerButton'>
              {footerSecondaryButton && (
                <Button
                  buttonAppearance='secondary'
                  className='conciseModal__footerButtonSecondary'
                  onClick={onFooterPrimaryButtonClick}
                >
                  {footerSecondaryButton}
                </Button>
              )}
              {footerPrimaryButton && (
                <Button
                  buttonAppearance='primary'
                  className='conciseModal__footerButtonPrimary'
                  onClick={onFooterSecondaryButtonClick}
                >
                  {footerPrimaryButton}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}
