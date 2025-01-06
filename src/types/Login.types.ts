import { TUser } from 'types'

export type TLogin = {
  isLoggedIn: boolean
  user: TUser | null
  token: string | null
}
