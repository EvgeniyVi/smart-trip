import { combineReducers } from '@reduxjs/toolkit'
import commonSlice from './slices/commonSlice'
import authSlice from './slices/authSlice'
import { authApi } from './service/authApi'

const appReducer = combineReducers({
  common: commonSlice,
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
})

export type RootState = ReturnType<typeof appReducer>
export { appReducer }
