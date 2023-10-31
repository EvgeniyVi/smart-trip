import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AuthState {
  name: string | null
  token: string | null
}

const initialState: AuthState = {
  name: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      state.name = action.payload.name
      state.token = action.payload.token
    },
  },
  extraReducers: (builder) => {},
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.name
