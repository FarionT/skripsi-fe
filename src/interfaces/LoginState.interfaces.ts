import { TUser } from 'types'

export interface LoginState {
  isLoggedIn: boolean
  user: TUser | null
  token: string | null
  refresh: string | null
}
