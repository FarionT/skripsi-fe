import { Outlet } from 'react-router-dom'
import { Footer, NavBar, SideBar } from 'components'
import { useMenu } from './getMenu'

const BasicLayout = () => {
  const { menu1 } = useMenu()
  return (
    <SideBar menu={menu1}>
      <NavBar />
      <Outlet />
      <Footer />
    </SideBar>
  )
}

const PublicRoutes = () => {
  return <BasicLayout />
}

export default PublicRoutes
