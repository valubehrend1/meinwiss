import {
    Typography
} from '@mui/material';
import React from 'react';
import { AvatarSectionProps } from '../../types/components';
import { AvatarContainer, StyledAvatar } from './ProfileStyles';

const AvatarSection: React.FC<AvatarSectionProps> = ({
    firstName,
    lastName
}) => {
    // Get initials for avatar
    const getInitials = () => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    };

    return (
        <AvatarContainer>
            <StyledAvatar
                alt={`${firstName} ${lastName}`}
            >
                {getInitials()}
            </StyledAvatar>

            <Typography variant="h6" gutterBottom>
                {`${firstName} ${lastName}`}
            </Typography>
        </AvatarContainer>
    );
};

export default AvatarSection;
