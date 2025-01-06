import { useNavigate } from 'react-router-dom'
import { TLogin } from 'types'

export const useAuth = () => {
  const tempState = localStorage.getItem('key_login')
  const loginstate: TLogin = tempState ? JSON.parse(tempState) : null

  if (loginstate?.isLoggedIn) {
    return loginstate
  } else {
    return {
      isLoggedIn: false,
      user: null,
      token: '',
    }
  }
}

export const useLogout = (): (() => void) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('key_login')
    localStorage.removeItem('churches')
    localStorage.removeItem('statuses')
    localStorage.removeItem('coordtypes')
    navigate('/login')
  }
  return logout
}

export const useLogin = (): ((loginState: TLogin) => void) => {
  const navigate = useNavigate()
  const saveLogin = (loginState: TLogin) => {
    // Check if User is first time login or not
    // if(loginState.user && loginState.user.pwd_first_attempt) {
    //   navigate('/dashboard')
    // } else {
      // Once the user is logged in, navigate to the home page
      localStorage.setItem('key_login', JSON.stringify(loginState))
      navigate('/dashboard')
    // }
  }
  return saveLogin
}
