import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TLoader = {
  loading: boolean
}

const initialState: TLoader = {
  loading: false,
}

export const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = loaderSlice.actions
export const loaderReducer = loaderSlice.reducer
