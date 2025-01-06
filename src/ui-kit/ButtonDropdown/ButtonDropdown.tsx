import classNames from 'classnames'
import { ReactNode, useState } from 'react'
import { Button, IconType, MenuList } from 'ui-kit'
import { ButtonSize, ButtonType } from 'ui-kit/Button'
import { TMenuType } from 'utils/getMenu'
import './ButtonDropdown.scss'
import { DropdownPosition } from 'types'

export type TDropdownOptions = {
  id: string
  title: string
  childIcon: IconType
  action?: () => void
}

type TButtonDropdownProps = {
  children?: ReactNode
  className?: string
  leftIcon?: IconType
  rightIcon?: IconType
  buttonType?: ButtonType
  buttonSize?: ButtonSize
  dropdownPosition?: DropdownPosition
  options: TMenuType | null
}

export const ButtonDropdown: React.FC<TButtonDropdownProps> = ({
  children,
  className,
  leftIcon,
  rightIcon,
  buttonType,
  buttonSize,
  dropdownPosition = '',
  options,
}) => {
  const [dropdownOpened, setDropdownOpened] = useState(false)
  const dropdownClick = () => {
    setDropdownOpened((prevDropdownOpened) => !prevDropdownOpened)
    if (dropdownOpened) {
      ;(document.activeElement as HTMLElement).blur()
    }
  }

  return (
    <div
      onBlur={() => setDropdownOpened(false)}
      className={classNames('dropdown ' + dropdownPosition, className)}
    >
      <div tabIndex={0} onClick={dropdownClick}>
        <Button
          buttonType={buttonType}
          buttonSize={buttonSize}
          typeIcon={leftIcon}
          typeIconRight={rightIcon}
        >
          {children}
        </Button>
      </div>
      {options && <MenuList menu={options} type='dropdown' />}
    </div>
  )
}
