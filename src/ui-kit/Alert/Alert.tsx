import { Button, Icon, IconType } from 'ui-kit'
import classNames from 'classnames'
import './Alert.scss'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'utils/redux'

export type TAlertStyle = 'none' | 'information' | 'success' | 'warning' | 'error'
export type TAlertType = 'subtle' | 'bold'
export type TAlertSize = 'small' | 'medium' | 'large'
export type TAlertPlacement = 'top' | 'bottom'

type TAlertProps = {
  alertTitle: string
  alertIcon?: IconType
  alertMessage?: string
  alertStyle?: TAlertStyle
  alertType?: TAlertType
  alertSize?: TAlertSize
  alertPlacement?: TAlertPlacement
  button?: string
  buttonIcon?: IconType
  duration?: number // Added duration property
  buttonClick?: (event: React.MouseEvent) => void
  isShown: boolean
  hide: () => void
}

type UseAlertReturnType = [boolean, () => void]

export const useAlert = (): UseAlertReturnType => {
  const [visible, setVisible] = useState(false)
  const toggle = () => {
    setVisible(!visible)
  }
  return [visible, toggle]
}

export const Alert = ({
  alertStyle = 'information',
  alertType = 'bold',
  alertSize = 'medium',
  alertPlacement = 'top',
  alertTitle,
  alertIcon = 'Alert',
  alertMessage,
  hide,
  button,
  buttonIcon,
  duration, // Added duration property
  buttonClick,
  isShown,
}: TAlertProps) => {
  const isSideBarClick = useSelector((state: RootState) => state.sidebar.isSidebarClick)

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isShown && duration) {
      timer = setTimeout(() => {
        hide();
      }, duration * 1000); // Convert duration to milliseconds
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isShown, duration, hide]);

  return (
    <div
      className={classNames('conciseAlert ', {
        'conciseAlert-none': alertStyle === 'none',
        'conciseAlert-information': alertStyle === 'information',
        'conciseAlert-success': alertStyle === 'success',
        'conciseAlert-warning': alertStyle === 'warning',
        'conciseAlert-error': alertStyle === 'error',
        'conciseAlert-subtle': alertType === 'subtle',
        'conciseAlert-bold': alertType === 'bold',
        'conciseAlert-small': alertSize === 'small',
        'conciseAlert-medium': alertSize === 'medium',
        'conciseAlert-large': alertSize === 'large',
        'conciseAlert-bottom': alertPlacement === 'bottom',
        'conciseAlert-show': isShown === true,
        'conciseAlert-sidebarOpen': isSideBarClick === true
      })}
    >
      <div className='conciseAlert-header'>
        <div className='conciseAlert-headerLeft'>
          {alertIcon && <Icon type={alertIcon} className='conciseAlert-leftIcon' />}
          <div className='conciseAlert-title'>{alertTitle}</div>
        </div>
        <div className='conciseAlert-headerRight'>
          {!alertMessage && button && (
            <Button 
              typeIcon={buttonIcon} 
              buttonSize={alertSize === 'large' ? 'big' : 'small'}  
              buttonType='filled'
              className='conciseAlert-rightButton'
              onClick={buttonClick} // Handle button click
            >
              {button}
            </Button>
          )}
          <Icon type='Cross' className='conciseAlert-dismissable' onClick={hide} />
        </div>
      </div>
      {alertMessage &&
        <div className='conciseAlert-content'>
          {alertMessage && <div className='conciseAlert-contentMessage'>{alertMessage}</div>}
          {alertMessage && button && (
            <Button
              typeIcon={buttonIcon}
              buttonSize={alertSize === 'large' ? 'big' : 'small'}
              buttonType='filled'
              buttonAppearance={classNames({
                primary: alertStyle === 'information',
                secondary: alertStyle === 'none',
                desctructive: alertStyle === 'error',
              })}
              className='conciseAlert-button'
              onClick={buttonClick} // Handle button click
            >
              {button}
            </Button>
          )}
        </div>
      }
    </div>
  )
}
