// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';

import { languageReducer } from './config/features/LanguagesSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
