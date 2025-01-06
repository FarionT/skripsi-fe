import { Outlet, Navigate, Link } from 'react-router-dom'
import { useAuth } from './getAuth'

const ProdiakonRoutes = () => {
  const { user, isLoggedIn } = useAuth()
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default ProdiakonRoutes
