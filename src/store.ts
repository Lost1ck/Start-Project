import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from'react-redux';
import counterReducer from './features/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
