import { combineReducers } from '@reduxjs/toolkit'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import commonSlice from './slices/commonSlice'

const appReducer = combineReducers({
  common: commonSlice,
})

export type RootState = ReturnType<typeof appReducer>
export { appReducer }
