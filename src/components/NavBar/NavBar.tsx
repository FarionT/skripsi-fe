import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setIsSidebarClick, setTheme } from 'utils/redux'
import { Button, ButtonDropdown, IconSwap, MenuRow } from 'ui-kit'
import { churchLogo, mainLogo } from 'ui-kit/assets/image'
import { TMenuType, useMenu } from 'utils/getMenu'
import { useLogout } from 'utils/getAuth'
import './NavBar.scss'

type TNavBarProps = {
  isUseSidebarOnDesktop?: boolean
}

export const NavBar: React.FC<TNavBarProps> = ({isUseSidebarOnDesktop}) => {
  const { menu2 } = useMenu()
  const logout = useLogout()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const optionsDropdown: TMenuType = {
    name: 'optionsDropdown',
    child: [
      {
        name: 'Logout',
        icon: 'Signout',
        action: () => {
          logout()
          navigate('/login')
        },
      },
    ],
  }

  const currentTheme = useSelector((state: RootState) => state.theme.theme)

  const handleThemeChange = () => {
    const isCurrentDark = currentTheme === 'dark'
    dispatch(setTheme(isCurrentDark ? 'light' : 'dark'))
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark')
  }

  return (
    <div className='sticky-navbar'>
      <div className='navbar container mx-auto lg:px-10 gap-6'>
        <label className='lg:hidden' htmlFor='drawer' aria-label='open sidebar'>
          <Button
            typeIcon='MenuBurger'
            buttonSize='big'
            buttonType='outline'
            onClick={() => {
              document?.getElementById('drawer')?.click()
              document.body.style.overflow = 'hidden'
              dispatch(setIsSidebarClick(true))
            }}
          />
        </label>
        <div className="navbar-logo">
          <div className="navbar-logo-wrapper">
            <img src={churchLogo} alt='Penjadwalan Prodakon - Paroki Alam Sutera - Concise' />
          </div>
        </div>
      </div>
    </div>
  )
}
