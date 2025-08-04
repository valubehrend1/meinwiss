import React from 'react';
import {
    TextField,
    Grid,
    Typography,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ProfileFormProps, ProfileFormData } from '../../types/components';
import { FormContainer, SectionTitle, SubmitButton, FormDivider } from './ProfileStyles';

const ProfileForm: React.FC<ProfileFormProps> = ({
    initialData,
    onSubmit,
    isLoading
}) => {
    const [formData, setFormData] = React.useState<ProfileFormData>(initialData);
    const [showPassword, setShowPassword] = React.useState({
        current: false,
        new: false,
        confirm: false
    });

    // Update local state when initialData changes
    React.useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const toggleShowPassword = (field: 'current' | 'new' | 'confirm') => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <SectionTitle variant="h6">Personal Information</SectionTitle>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                    </Grid>
                </Grid>

                <SectionTitle variant="h6">Change Password</SectionTitle>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Leave blank if you don't want to change your password
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Current Password"
                            type={showPassword.current ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            disabled={isLoading}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => toggleShowPassword('current')}
                                            edge="end"
                                        >
                                            {showPassword.current ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="New Password"
                            type={showPassword.new ? 'text' : 'password'}
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            disabled={isLoading}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => toggleShowPassword('new')}
                                            edge="end"
                                        >
                                            {showPassword.new ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Confirm New Password"
                            type={showPassword.confirm ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            disabled={isLoading}
                            error={
                                !!formData.newPassword &&
                                !!formData.confirmPassword &&
                                formData.newPassword !== formData.confirmPassword
                            }
                            helperText={
                                formData.newPassword &&
                                    formData.confirmPassword &&
                                    formData.newPassword !== formData.confirmPassword
                                    ? "Passwords don't match"
                                    : ""
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => toggleShowPassword('confirm')}
                                            edge="end"
                                        >
                                            {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>

                <FormDivider />

                <SubmitButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isLoading}
                >
                    {isLoading ? 'Saving...' : 'Save Changes'}
                </SubmitButton>
            </form>
        </FormContainer>
    );
};

export default ProfileForm;
