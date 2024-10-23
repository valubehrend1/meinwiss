// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';

import { languageReducer } from './config/features/LanguagesSlice';
import { chatReducer } from './config/features/ChatSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    chat: chatReducer,
  },
});
