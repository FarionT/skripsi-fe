import { getAPI, postAPI, putAPI } from 'services'

export const login = (email: string, password: string) => {
  return postAPI('auth/login', { email: email, password: password })
}

export const changePassword = (data: any) => {
  return putAPI('auth/change-password', data)
}

export const getUsersList = () => {
  return getAPI('users', {})
}