import { useSelector, useDispatch } from 'react-redux'
import { IconType } from 'ui-kit'
import { RootState, setIsSidebarClick, setIsSidebarHover } from './redux'
export type TMenuType = {
  name: string
  desc?: string
  href?: string
  icon?: IconType
  child?: TMenuType[]
  readPermission?: boolean
  action?: () => void
}

export const useMenu = () => {
  const isSidebarClick = useSelector((state: RootState) => state.sidebar.isSidebarClick)
  const isSidebarHover = useSelector((state: RootState) => state.sidebar.isSidebarHover)
  const dispatch = useDispatch()

  const menu1: TMenuType = {
    name: 'Main Menu',
    action: () => {
      dispatch(setIsSidebarClick(!isSidebarClick))
      dispatch(setIsSidebarHover(!isSidebarHover))
    },
    child: [
      {
        icon: 'Dashboard',
        name: 'Dashboard',
        href: '/dashboard',
        readPermission: true,
      },
      {
        icon: 'MasterData',
        name: 'Master Data',
        desc: 'List of Master Data',
        href: '/dashboard/#',
        child: [
          {
            name: 'Gereja',
            href: '/dashboard/master-data-church',
            readPermission: true,
          },
          {
            name: 'Prodiakon',
            href: '/dashboard/master-data-prodeacon',
            readPermission: true,
          }
        ]
      },
      {
        icon: 'Calendar',
        name: 'Jadwal Tugas Prodiakon',
        href: '/dashboard/prodeacon-scheduling',
        readPermission: true
      },
      {
        icon: 'UserAlt',
        name: 'Go to Member Display',
        href: '/',
        readPermission: true
      }
    ],
  }

  const menu2: TMenuType = {
    name: 'Main Menu',
    child: [
      {
        icon: 'Home',
        name: 'Home',
        href: '/',
      },
      {
        name: 'Product',
        desc: 'List of User',
        href: '/sec',
      },
      {
        name: 'About Us',
        href: '/about',
      }
    ]
  }

  return { menu1, menu2 }
}
