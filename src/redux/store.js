import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars-slice';
import { favoriteReducer } from './favorite-slice';
import totalCarsReducer from './totalCars-slice';

import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite', 'totalCars'],
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);
const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);
const persistedTotalCarsReducer = persistReducer(
  persistConfig,
  totalCarsReducer
);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    favorite: persistedFavoriteReducer,
    totalCars: persistedTotalCarsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);