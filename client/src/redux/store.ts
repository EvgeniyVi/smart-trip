import {
  configureStore,
  isFulfilled,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query'
import { appReducer } from './RootReducer'
import { authApi } from './service/authApi'
import notify from '../components/notify'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'common'],
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (action.payload !== undefined) {
      if (isRejectedWithValue(action)) {
        return notify({
          duration: 0,
          message: '',
          description: action.payload.message,
          type: action.payload.type,
        })
      }
      if (isFulfilled(action)) {
        notify({
          duration: 0,
          message: '',
          description: action.payload.message,
          type: action.payload.type,
        })
      }
    } else {
      return next(action)
    }
    return next(action)
  }

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware, rtkQueryErrorLogger),
})

const storePersist = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
export { store, storePersist }
