// Types related to language state management in Redux

import { Language } from '../config';

/**
 * Redux state for language slice
 */
export interface LanguageState {
  current: Language;
}

/**
 * Root state type with language slice
 */
export interface RootStateWithLanguage {
  language: {
    current: Language;
  };
}
