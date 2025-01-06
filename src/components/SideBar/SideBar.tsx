import { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon, MenuList } from 'ui-kit'
import { churchLogo } from 'ui-kit/assets/image'
import { TMenuType } from 'utils/getMenu'
import './SideBar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, setIsSidebarClick, setIsSidebarHover } from 'utils/redux'
import { useAuth, useLogout } from 'utils/getAuth'
import packageJson from '../../../package.json'

type TSideBarProps = {
  children: ReactNode
  isShowOnDesktop?: boolean
  menu: TMenuType
  useLogo?: boolean
}

export const SideBar: React.FC<TSideBarProps> = ({ children, menu, useLogo = true }) => {
  const dispatch = useDispatch()

  const logout = useLogout()
  const navigate = useNavigate()
  const { user } = useAuth()

  const isSidebarClick = useSelector((state: RootState) => state.sidebar.isSidebarClick)

  const handleOpenSidebar = () => {
    if (isSidebarClick) {
      return true
    } else {
      document.getElementById('sidebar-dropdown')?.removeAttribute('open')
      return false
    }
  }

  return (
    <>
      <div className={'concise_page'}>
        <div
          className={
            (handleOpenSidebar() ? 'sidebar' : 'sidebar sidebar_close') +
            (useLogo ? '' : ' sidebar_no_logo')
          }
          onMouseEnter={() => {
            dispatch(setIsSidebarHover(true))
          }}
          onMouseLeave={() => {
            dispatch(setIsSidebarHover(false))
          }}
        >
          {useLogo && (
            <div className='sidebarHeader'>
              <Link to='/dashboard'>
                <div className='sidebarHeader_Wrapper'>
                  <div className='sidebarHeader_LogoWrapper'>
                    <img src={churchLogo} className='sidebarHeader_Logo' />
                  </div>
                  <div className='sidebarHeader_Title'>Paroki Santo Laurensius</div>
                </div>
              </Link>
            </div>
          )}
          <div className='sidebarContent'>
            <div className='sidebarMenu'>
              <MenuList menu={menu}></MenuList>
            </div>
            <div className='sidebarFooter'>
              <div
                className='sidebarFooter_Logout'
                onClick={() => {
                  logout()
                }}
              >
                <div>
                  <div className='sidebarFooter_LogoutName'>{user?.full_name}</div>
                  <div className='sidebarFooter_LogoutPosition'>
                    {user && user.role ? user.role.name : 'No Role'}
                  </div>
                  <div className='sidebarFooter_LogoutVersion app-version'>
                    V {packageJson.version}
                  </div>
                </div>
                <Icon type={'Logout'} size='big' />
              </div>
            </div>
          </div>
        </div>

        <div className={isSidebarClick ? 'page_content page_content_open' : 'page_content'}>
          {/* Page content here */}
          {children}
        </div>
      </div>
    </>
  )
}
