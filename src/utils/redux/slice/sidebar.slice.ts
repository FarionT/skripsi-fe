import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TSidebarProps = {
  isSidebarHover: boolean,
  isSidebarClick: boolean
}

const initialState: TSidebarProps = {
  isSidebarHover: false,
  isSidebarClick: false
}

export const sidebarSlice = createSlice({
  name: 'sidebarRedux',
  initialState,
  reducers: {
    setIsSidebarHover: (state, action: PayloadAction<boolean>) => {
      state.isSidebarHover = action.payload
    },
    setIsSidebarClick: (state, action: PayloadAction<boolean>) => {
      state.isSidebarClick = action.payload
    },
  },
})

export const { setIsSidebarHover, setIsSidebarClick } = sidebarSlice.actions
export const sidebarReducer = sidebarSlice.reducer