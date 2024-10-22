import { useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import { catalogApi } from './api/catalog';


export const makeStore = () => {
  return configureStore({
    reducer: {
      [catalogApi.reducerPath]: catalogApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(catalogApi.middleware);
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
