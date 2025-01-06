import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from 'ui-kit'
import { TMenuType } from 'utils/getMenu'
import './MenuRow.scss'

export type TMenuRowProps = {
  className?: string
  menu?: TMenuType
}

export const MenuRow: React.FC<TMenuRowProps> = ({ menu }) => {
  const [activePath, setActivePath] = useState<string>('/')
  const location = useLocation()

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location.pathname])

  return (
    <ul className='menu-horizontal hidden lg:flex menuRowUl'>
      {menu?.child &&
        menu.child.map((menuRow: TMenuType, index) => {
          return menuRow.child && menuRow.child.length > 0 ? (
            <li key={menuRow.name}>
              <div className='dropdown p-0'>
                <div tabIndex={index} className='flex menuUrl menuUrl-parent'>
                  {menuRow.icon && <Icon size='small' type={menuRow.icon} />}
                  {menuRow.name}
                  <Icon className='menuUrl-iconRow' type='CaretDown' size='small' />
                </div>
                <ul tabIndex={index} className='dropdown-content menuRowUl menuRowUl-child'>
                  {menuRow.child.map((menuRowChild: TMenuType) => (
                    <li key={menuRowChild.name}>
                      <Link
                        to={menuRowChild?.href ? menuRowChild?.href : '/'}
                        className={`menuUrl ${
                          activePath === menuRowChild.href ? 'menuActiveUrl' : ''
                        }`}
                      >
                        {menuRowChild.icon && <Icon size='small' type={menuRowChild.icon} />}
                        {menuRowChild?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li key={menuRow.name}>
              <Link
                to={menuRow?.href ? menuRow?.href : '/'}
                className={`menuUrl ${activePath === menuRow.href ? 'menuActiveUrl' : ''}`}
              >
                {menuRow.icon && <Icon size='small' type={menuRow.icon} />}
                {menuRow.name}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}
