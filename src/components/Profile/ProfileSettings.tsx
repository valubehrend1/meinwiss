import {
    Typography
} from '@mui/material';
import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { ProfilePageProps } from '../../types/components';
import AvatarSection from './AvatarSection';
import ProfileForm from './ProfileForm';
import {
    AvatarSectionBox,
    ErrorAlert,
    FormSectionBox,
    LoadingBox,
    PageTitle,
    ProfileContainer,
    ProfileLayoutBox,
    ProfilePaper,
    SuccessSnackbar
} from './ProfileStyles';

const ProfileSettings: React.FC<ProfilePageProps> = ({ userId }) => {
    const {
        profile,
        formData,
        isLoading,
        error,
        updateProfile
    } = useProfile(userId);

    const [successMessage, setSuccessMessage] = React.useState<string | null>(null);

    const handleSubmit = async (data: typeof formData) => {
        try {
            await updateProfile(data);
            setSuccessMessage('Profile updated successfully');
        } catch (err) {
            // Error is already handled in the hook
            console.error('Error updating profile:', err);
        }
    };

    const handleCloseSnackbar = () => {
        setSuccessMessage(null);
    };

    if (!profile) {
        return (
            <ProfileContainer maxWidth="md">
                <LoadingBox>
                    <Typography>
                        {isLoading ? 'Loading profile...' : 'Profile not found'}
                    </Typography>
                </LoadingBox>
            </ProfileContainer>
        );
    }

    return (
        <ProfileContainer maxWidth="md">
            <PageTitle variant="h4">Profile Settings</PageTitle>

            <ProfilePaper elevation={2}>
                {error && (
                    <ErrorAlert severity="error">
                        {error}
                    </ErrorAlert>
                )}

                <ProfileLayoutBox>
                    <AvatarSectionBox>
                        <AvatarSection
                            firstName={profile.firstName}
                            lastName={profile.lastName}
                        />
                    </AvatarSectionBox>

                    <FormSectionBox>
                        <ProfileForm
                            initialData={formData}
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                        />
                    </FormSectionBox>
                </ProfileLayoutBox>
            </ProfilePaper>

            <SuccessSnackbar
                open={!!successMessage}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                message={successMessage}
            />
        </ProfileContainer>
    );
};

export default ProfileSettings;
