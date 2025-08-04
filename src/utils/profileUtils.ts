import { UserProfile } from '../types/components';

// Mock data for development
const MOCK_USER: UserProfile = {
  id: 'user-123',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@example.com',
};

/**
 * Get user profile data
 * @param userId - User ID (optional)
 * @returns User profile data
 */
export const getUserProfile = async (userId?: string): Promise<UserProfile> => {
  // This would typically be an API call to get user data
  // For now, we'll return mock data
  console.log('Getting profile for user:', userId);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return MOCK_USER;
};

/**
 * Update user profile data
 * @param profileData - Updated profile data
 * @returns Updated user profile
 */
export const updateUserProfile = async (
  profileData: Partial<
    UserProfile & {
      currentPassword?: string;
      newPassword?: string;
    }
  >
): Promise<UserProfile> => {
  // This would typically be an API call to update user data
  console.log('Updating profile with data:', profileData);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Return updated profile
  return {
    ...MOCK_USER,
    ...profileData,
  };
};
