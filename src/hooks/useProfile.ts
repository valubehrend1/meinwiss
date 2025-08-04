import { useState, useEffect } from 'react';
import { ProfileFormData, UserProfile } from '../types/components';
import { getUserProfile, updateUserProfile } from '../utils/profileUtils';

/**
 * Hook for managing profile data
 * @param userId - The ID of the user whose profile to load
 */
export const useProfile = (userId?: string) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load profile data
  useEffect(() => {
    const loadProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const userData = await getUserProfile(userId);
        setProfile(userData);
        setFormData({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: '',
          newPassword: '',
          confirmPassword: '',
        });
      } catch (err) {
        setError('Error loading profile data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [userId]);

  // Update profile data
  const updateProfile = async (data: ProfileFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Password validation for changing password
      if (data.newPassword) {
        if (data.newPassword !== data.confirmPassword) {
          throw new Error('New passwords do not match');
        }
      }

      const updatedProfile = await updateUserProfile({
        id: profile?.id || '',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        // Only include password fields if they're provided
        ...(data.password && { currentPassword: data.password }),
        ...(data.newPassword && { newPassword: data.newPassword }),
      });

      setProfile(updatedProfile);
      setFormData({
        ...data,
        password: '',
        newPassword: '',
        confirmPassword: '',
      });
      return updatedProfile;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error updating profile';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    profile,
    formData,
    isLoading,
    error,
    updateProfile,
  };
};
