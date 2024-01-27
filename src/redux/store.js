import { configureStore, combineReducers } from '@reduxjs/toolkit';
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

import { carsReducer } from './cars-slice';
import { favoriteReducer } from './favorite-slice';
import { filterReducer } from './filter-slice';
import totalCarsReducer from './totalCars-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite', 'totalCars'],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteReducer,
  totalCars: totalCarsReducer,
  filterCars: filterReducer
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
