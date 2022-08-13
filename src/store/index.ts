import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { globalReducer } from './slices/globalSlice';

const store = configureStore({
  reducer: {
    globalState: globalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
