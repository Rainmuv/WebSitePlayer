import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import InputSlice from './slices/InputSlice';
import SystemInfoSlice from './slices/SystemInfoSlice';

export const store = configureStore({
  reducer: {
    InputSlice,
    SystemInfoSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()