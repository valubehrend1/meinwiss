// Types for AskQuestion components

/**
 * Props for the MainFilters component
 */
export interface MainFiltersProps {
  ageError: boolean;
  countryError: boolean;
  locationError: boolean;
  timeError: boolean;
}

/**
 * Props for the CountriesSearch component
 */
export interface CountriesSearchProps {
  countryError: boolean;
}

/**
 * Props for the StateSearch component
 */
export interface StateSearchProps {
  locationError: boolean;
}

/**
 * Props for the TimeFrameInput component
 */
export interface TimeFrameInputProps {
  timeError: boolean;
}
