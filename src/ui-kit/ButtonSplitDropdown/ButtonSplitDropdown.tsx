import { Button, ButtonDropdown, IconType } from 'ui-kit'
import { ReactNode } from 'react'
import { TMenuType } from 'utils/getMenu'
import { ButtonSize } from 'ui-kit/Button'
import classNames from 'classnames'
import './ButtonSplitDropdown.scss'

type TButtonSplitDropdownProps = {
  className?: string
  children?: ReactNode
  buttonSize?: ButtonSize
  dropdownOptions?: TMenuType
  dropdownButtonString?: string
  dropdownButtonIconLeft?: IconType
  dropdownButtonIconRight?: IconType
  mainButtonString?: string
  mainButtonIconLeft?: IconType
  mainButtonIconRight?: IconType
  onLeftButtonClick?: (event: React.MouseEvent) => void
}

export const ButtonSplitDropdown: React.FC<TButtonSplitDropdownProps> = ({
  className,
  children,
  buttonSize,
  dropdownOptions,
  dropdownButtonString,
  dropdownButtonIconLeft,
  dropdownButtonIconRight,
  mainButtonString,
  mainButtonIconLeft,
  mainButtonIconRight,
  onLeftButtonClick,
}) => {
  return (
    <div className={classNames('join', className)}>
      <Button
        typeIcon={mainButtonIconLeft}
        typeIconRight={mainButtonIconRight}
        buttonSize={buttonSize}
        className='join-item'
        onClick={onLeftButtonClick}
      >
        {mainButtonString}
        {children}
      </Button>
      <ButtonDropdown
        leftIcon={dropdownButtonIconLeft}
        rightIcon={dropdownButtonIconRight}
        buttonSize={buttonSize}
        className='join-item'
        dropdownPosition='dropdown-end'
        options={dropdownOptions ? dropdownOptions : null}
      >
        {dropdownButtonString}
      </ButtonDropdown>
    </div>
  )
}
