import { createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { getLanguage } from '../../utils/helpers'

const initialState = {
  language: getLanguage(),
}

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

const persistConfig = {
  key: 'common',
  storage,
  whitelist: ['language'],
}
export const { setLanguage } = commonSlice.actions
export default persistReducer(persistConfig, commonSlice.reducer)
