import { createSlice, createAction } from '@reduxjs/toolkit';

interface ErrorState {
  hasError: boolean;
}

const initialState: ErrorState = {
  hasError: false,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state) {
      state.hasError = true;
    },
    clearError(state) {
      state.hasError = false;
    },
  },
});

export const setError = createAction<boolean>('error/setError');

export const { clearError } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;

export default errorSlice;
