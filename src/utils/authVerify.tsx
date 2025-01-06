import { useEffect } from 'react'
import { useAuth, useLogout } from './getAuth'

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

const AuthVerify = () => {
  const { token } = useAuth()
  const logout = useLogout()
  useEffect(() => {
    const logOut = () => {
      logout()
    }
    if (token) {
      const decodedJwt = parseJwt(token)
      if (decodedJwt.exp * 1000 < Date.now()) {
        logOut()
      }
    }
  }, [logout, token])

  return <></>
}

export default AuthVerify
