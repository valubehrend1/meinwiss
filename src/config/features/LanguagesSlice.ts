// src/features/language/languageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../../types';

type LanguageState = {
  current: Language;
};

const initialState: LanguageState = {
  current: Language.DE,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      try {
        state.current = action.payload as Language;
      } catch (error) {
        console.error('Error while handling language change:', error);
      }
    },
  },
});

export const selectCurrentLanguage = (state: {
  language: { currentLanguage: Language };
}) => state.language.currentLanguage;

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
export default languageSlice;
