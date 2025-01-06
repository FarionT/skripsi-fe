import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from 'ui-kit'
import { TMenuType } from 'utils/getMenu'
import './MenuList.scss'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setIsSidebarClick } from 'utils/redux'

export type ListType = 'default' | 'dropdown'

export type TMenuListProps = {
  className?: string
  menu?: TMenuType
  type?: ListType
}

const MenuHeader = ({
  name,
  action,
  isSidebarClick,
}: {
  name?: string
  action?: () => void
  isSidebarClick: boolean
}) => (
  <div data-testid='id-menuHeader' className='menuHeaderPareng'>
    <div className='menuName-Parent'>
      <div className='menuHeader menuName'>{name}</div>
    </div>
    <Icon
      type='ChevronDoubleRight'
      onClick={action}
      className={classNames('menuHeader_Toggle', { menuHeader_ToggleOpen: isSidebarClick })}
    />
  </div>
)

const MenuItem = ({ menuList, activePath }: { menuList: TMenuType; activePath: string }) => {
  const dispatch = useDispatch()

  return (
    <li id={`id-${menuList.name}`} key={menuList.name} onClick={menuList.action}>
      {menuList.href ? (
        <Link
          to={menuList.href}
          className={classNames('menuUrl', {
            menuActiveUrl:
              menuList.href !== '/' &&
              (menuList.href === '/dashboard'
                ? activePath === '/dashboard'
                : activePath.startsWith(menuList.href ?? '') ||
                  menuList.child?.some((child) => activePath.startsWith(child.href ?? ''))),
          })}
          onClick={() => {
            dispatch(setIsSidebarClick(false))
          }}
        >
          {menuList.icon && <Icon type={menuList.icon} />}
          <div className='menuName-Parent'>
            <div className='menuName'>{menuList.name}</div>
          </div>
        </Link>
      ) : (
        <div className='menuUrl'>
          {menuList.icon && <Icon type={menuList.icon} />}
          <div className='menuName-Parent'>
            <div className='menuName'>{menuList.name}</div>
          </div>
        </div>
      )}
    </li>
  )
}

function camelCase(str: string): string {
  const trimmedStr = str.replace(/\s+/g, '')
  return trimmedStr.charAt(0).toLowerCase() + trimmedStr.slice(1)
}

const DropdownMenu = ({
  menuList,
  activePath,
  dispatch,
}: {
  menuList: TMenuType
  activePath: string
  dispatch: any
}) => (
  <li
    id={`id-${menuList.name}`}
    data-testid={camelCase(menuList.name)}
    key={menuList.name}
    onClick={() => {
      if ((menuList.child?.length ?? 0) === 0) {
        dispatch(setIsSidebarClick(false))
      } else {
        dispatch(setIsSidebarClick(true))
      }
    }}
  >
    <details id='sidebar-dropdown'>
      <summary
        className={classNames('menuUrl menuUrl-parent', {
          menuActiveUrl:
            activePath.startsWith(menuList.href ?? '') ||
            menuList.child?.some((child) => activePath.startsWith(child.href ?? '')),
        })}
      >
        <div className='menuUrl-iconLeft'>
          {menuList.icon && <Icon type={menuList.icon} />}
          <div className='menuName-Parent'>
            <div className='menuName'>{menuList.name}</div>
          </div>
        </div>
        <Icon className='menuUrl-iconRight menuName' type='ChevronDown' />
      </summary>
      <ul className='menuListUl menuListUl-child'>
        {menuList.child
          ?.filter((child) => child.readPermission)
          .map((child) => (
            <MenuItem key={child.name} menuList={child} activePath={activePath} />
          ))}
      </ul>
    </details>
  </li>
)

const shouldDisplayMenu = (menuList: TMenuType) => {
  if (menuList.child && menuList.child.length > 0) {
    return menuList.child.some((child) => child.readPermission)
  }
  return menuList.readPermission
}

export const MenuList: React.FC<TMenuListProps> = ({ className, menu, type = 'default' }) => {
  const [activePath, setActivePath] = useState<string>('/')
  const location = useLocation()
  const dispatch = useDispatch()
  const isSidebarClick = useSelector((state: RootState) => state.sidebar.isSidebarClick)

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location.pathname])

  const renderMenuList = (menuList: TMenuType[]) => {
    return menuList.filter(shouldDisplayMenu).map((menuItem) => {
      if (menuItem.child && menuItem.child.length > 0) {
        return (
          <DropdownMenu
            key={menuItem.name}
            menuList={menuItem}
            activePath={activePath}
            dispatch={dispatch}
          />
        )
      } else {
        return <MenuItem key={menuItem.name} menuList={menuItem} activePath={activePath} />
      }
    })
  }

  return (
    <div className={classNames('sidebarMenu-Content', className, { 'p-0': type === 'dropdown' })}>
      {type === 'default' && (
        <MenuHeader name={menu?.name} action={menu?.action} isSidebarClick={isSidebarClick} />
      )}
      <ul
        tabIndex={0}
        className={classNames('menuListUl', { 'dropdown-content': type === 'dropdown' })}
      >
        {menu?.child && renderMenuList(menu.child)}
      </ul>
    </div>
  )
}
