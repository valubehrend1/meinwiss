// Type definitions for user data

/**
 * User context with demographic and location information
 */
export interface UserContext {
  originCountry: string | null;
  timeInGermany: string | null;
  age: string | null;
  location: string;
}
