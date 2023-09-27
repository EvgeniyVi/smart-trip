import { createSlice } from '@reduxjs/toolkit'
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

export const { setLanguage } = commonSlice.actions
export default commonSlice.reducer
