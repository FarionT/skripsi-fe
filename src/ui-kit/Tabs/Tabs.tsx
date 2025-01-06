import { ReactElement, ReactNode, useState } from 'react'
import classNames from 'classnames'
import './Tabs.scss'
import { Icon, IconType } from 'ui-kit'

export type TabsSize = 'large' | 'small' | 'medium'
export type TabsType = 'tabs' | 'navigation' | 'number' | 'button'
export type TabsOrientation = 'horizontal' | 'vertical'

type TTabsProps = {
  className?: string
  children: ReactElement[]
  tabsSize?: TabsSize
  tabsType?: TabsType
  tabsOrientation?: TabsOrientation
  onClick?: () => void
}

type TTabProps = {
  children: ReactNode
  title?: string
  leftIcon?: IconType
  rightIcon?: IconType
}

export const Tab = ({ children }: TTabProps) => {
  return <div>{children}</div>
}

export const Tabs = ({
  className,
  children,
  tabsSize = 'medium',
  tabsType = 'tabs',
  tabsOrientation = 'horizontal',
  onClick,
}: TTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleClick = (index: number) => {
    if (onClick) {
      onClick()
    }
    setSelectedTab(index)
  }
  return (
    <div
      className={classNames(
        'conciseTabs ',
        {
          conciseTabs__vertical: tabsOrientation === 'vertical',
        },
        className
      )}
    >
      <ul className='conciseTabsTitle'>
        {children.map((item, index) => (
          <li
            className={classNames('conciseTabsTitleItem', {
              tabActive: selectedTab === index,
              conciseTabs__tabs: tabsType === 'tabs',
              conciseTabs__navigation: tabsType === 'navigation',
              conciseTabs__button: tabsType === 'button',
              conciseTabs__small: tabsSize === 'small',
              conciseTabs__large: tabsSize === 'large',
              conciseTabs__number: tabsType === 'number',
              conciseTabs__medium: tabsSize === 'medium',
            })}
            key={index}
            onClick={() => handleClick(index)}
          >
            {tabsType === 'number' && index + 1}
            {item.props.leftIcon ? (
              <Icon
                type={item.props.leftIcon}
                className={classNames('conciseTabs__leftIcon', {
                  conciseTabs__leftIconCenter: item.props.title === undefined,
                })}
              />
            ) : null}
            {item.props.title}
            {item.props.rightIcon ? (
              <Icon
                type={item.props.rightIcon}
                className={classNames('conciseTabs__rightIcon', {
                  conciseTabs__rightIconCenter: item.props.title === undefined,
                })}
              />
            ) : null}
          </li>
        ))}
      </ul>
      <div className='conciseTabsContent'>{children[selectedTab]}</div>
    </div>
  )
}
