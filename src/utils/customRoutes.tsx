import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from 'components'

const BasicLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const CustomRoutes = () => {
  return <BasicLayout />
}

export default CustomRoutes
