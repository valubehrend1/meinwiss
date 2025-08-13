import React from 'react';
import { Typography, Box } from '@mui/material';
import { WidgetLupaiAnswerContainer } from './WidgetMessageStyles';
import ReactMarkdown from 'react-markdown';
import { RetrieverItem } from '../../../../types/api';
import { useSelector } from 'react-redux';
import {
    selectStatusDisplay,
    selectOriginalStatus
} from '../../../../config/features/ChatSlice';
import theme from '../../../../theme';
import WidgetLupaiResources from './WidgetLupaiResources';

interface WidgetLupaiAnswerProps {
    content: string;
    sources?: RetrieverItem[];
    answerFound?: boolean;
    isFinalResponse: boolean;
    error?: string | null;
}

const WidgetLupaiAnswer: React.FC<WidgetLupaiAnswerProps> = ({
    content,
    sources,
    isFinalResponse,
    error
}) => {
    const status = useSelector(selectOriginalStatus);
    const displayedStatus = useSelector(selectStatusDisplay);

    // Función para determinar si mostrar el spinner/estado
    const showSpinner = (): boolean => {
        return status !== null && typeof displayedStatus === 'string' && displayedStatus.length > 0 && !isFinalResponse;
    };

    return (
        <WidgetLupaiAnswerContainer>
            {showSpinner() ? (
                <Typography
                    variant="body2"
                    sx={{
                        color: theme.palette.primary.main,
                        animation: 'pulse 1.5s infinite',
                        '@keyframes pulse': {
                            '0%': { opacity: 0.5 },
                            '50%': { opacity: 1 },
                            '100%': { opacity: 0.5 },
                        },
                    }}
                >
                    {displayedStatus}
                </Typography>
            ) : error ? (
                <Typography variant="body2" color="error">
                    {error}
                </Typography>
            ) : (
                <Box sx={{ width: '100%' }}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    {isFinalResponse && sources && sources.length > 0 && (
                        <WidgetLupaiResources sources={sources} />
                    )}
                </Box>
            )}
        </WidgetLupaiAnswerContainer>
    );
};

export default WidgetLupaiAnswer;
