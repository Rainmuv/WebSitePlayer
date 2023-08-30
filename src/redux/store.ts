import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import InputSlice from './slices/InputSlice';
import TageAudioSlice from './slices/TageAudioSlice';

export const store = configureStore({
  reducer: {
    InputSlice,
    TageAudioSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
