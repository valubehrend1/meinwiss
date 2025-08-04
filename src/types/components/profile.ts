/**
 * Types for user profile data and components
 */

// User profile data
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

// Form data for profile editing
export interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newPassword?: string;
  confirmPassword?: string;
}

// Props for the profile page component
export interface ProfilePageProps {
  userId?: string;
}

// Props for the profile form component
export interface ProfileFormProps {
  initialData: ProfileFormData;
  onSubmit: (data: ProfileFormData) => Promise<void>;
  isLoading: boolean;
}

// Props for the avatar component
export interface AvatarSectionProps {
  firstName: string;
  lastName: string;
}
