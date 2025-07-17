// src/features/language/languageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../../types';
import { LanguageState, RootStateWithLanguage } from '../../types/redux';

const initialState: LanguageState = {
  current: Language.EN,
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

export const selectCurrentLanguage = (state: RootStateWithLanguage) =>
  state.language.current;

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
export default languageSlice;
