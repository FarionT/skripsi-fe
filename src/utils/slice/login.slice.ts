import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from 'types'

type TLoginProps = {
  firstAttempt: boolean
  prevPassword: string
  isLoggedIn: boolean
  user: TUser | null
  token: string | null
  refresh: string | null
}

type LoginState = {
  isLoggedIn: boolean
  user: TUser | null
  refresh: string | null
}

const initialState: TLoginProps = {
  firstAttempt: false,
  prevPassword: '',
  isLoggedIn: false,
  user: null,
  token: null,
  refresh: null,
}

export const loginSlice = createSlice({
  name: 'loginRedux',
  initialState,
  reducers: {
    setFirstAttempt: (state, action: PayloadAction<boolean>) => {
      state.firstAttempt = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.prevPassword = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    loginSuccess: (state, action: PayloadAction<LoginState>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user
      state.refresh = action.payload.refresh;
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
      state.token = null
      state.refresh = null
    },
  },
})

export const { setFirstAttempt, setPassword, setToken, loginSuccess, logout } = loginSlice.actions
export const loginReducer = loginSlice.reducer