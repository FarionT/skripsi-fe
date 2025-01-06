import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TThemeSelector = {
  theme: string
}

const initialState: TThemeSelector = {
  theme: '',
}

export const themeSlice = createSlice({
  name: 'themeRedux',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer