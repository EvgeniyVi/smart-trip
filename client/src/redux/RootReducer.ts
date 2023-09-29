import { combineReducers } from '@reduxjs/toolkit'
import commonSlice from './slices/commonSlice'

const appReducer = combineReducers({
  common: commonSlice,
})

export type RootState = ReturnType<typeof appReducer>
export { appReducer }
