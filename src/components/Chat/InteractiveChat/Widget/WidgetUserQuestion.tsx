import React from 'react';
import { Typography } from '@mui/material';
import { WidgetUserQuestionContainer } from './WidgetMessageStyles';

interface WidgetUserQuestionProps {
    content: string;
}

const WidgetUserQuestion: React.FC<WidgetUserQuestionProps> = ({ content }) => {
    return (
        <WidgetUserQuestionContainer>
            <Typography variant="body2">{content}</Typography>
        </WidgetUserQuestionContainer>
    );
};

export default WidgetUserQuestion;
