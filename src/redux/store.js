import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
// import { wordsReducer } from './words/slice.js';
import { authReducer } from './auth/slice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
  reducer: {
    // words: wordsReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);