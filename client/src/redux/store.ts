import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { appReducer } from './RootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'common'],
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const storePersist = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, storePersist }
