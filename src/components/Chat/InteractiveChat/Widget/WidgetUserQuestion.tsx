import { Typography } from '@mui/material';
import React from 'react';
import { WidgetUserQuestionContainer } from './styles';

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
