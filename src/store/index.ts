import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messageReducer from './message';
import usersReducer from './users';
import { colorsApi } from './colors';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistMessageReducer = persistReducer(
  {
    key: 'message',
    storage: AsyncStorage,
  },
  messageReducer,
);

const rootReducer = combineReducers({
  message: persistMessageReducer,
  users: usersReducer,
  [colorsApi.reducerPath]: colorsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(colorsApi.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
