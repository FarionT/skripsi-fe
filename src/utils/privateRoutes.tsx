import { NavBar } from 'components'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { SideBar } from 'components/SideBar'
import { useAuth } from './getAuth'
import { useMenu } from './getMenu'
import AuthVerify from './authVerify'
import { useEffect } from 'react'

const BasicLayout = () => {
  const { menu1 } = useMenu()
  return (
    <>
      <NavBar />
      <SideBar isShowOnDesktop={true} menu={menu1}>
        {/* <NavBar isUseSidebarOnDesktop={true} /> */}
        <Outlet />
        {/* <AuthVerify /> */}
      </SideBar>
    </>
  )
}

const PrivateRoutes = () => {
  const { user, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(isLoggedIn) {
  //     if(user?.role?.id == '3') {
  //       navigate('/')
  //     } else {
  //       navigate('/dashboard')
  //     }
  //   }
  // }, [isLoggedIn, user, navigate])

  return isLoggedIn ? <BasicLayout /> : <Navigate to='/login' />
}

export default PrivateRoutes
