import { Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import {
    selectOriginalStatus,
    selectStatusDisplay
} from '../../../../config/features/ChatSlice';
import { RetrieverItem } from '../../../../types/api';
import { ContentContainer, LoadingStatus, WidgetLupaiAnswerContainer } from './styles';
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

    const showSpinner = (): boolean => {
        return status !== null && typeof displayedStatus === 'string' && displayedStatus.length > 0 && !isFinalResponse;
    };

    return (
        <WidgetLupaiAnswerContainer>
            {showSpinner() ? (
                <LoadingStatus variant="body2">
                    {displayedStatus}
                </LoadingStatus>
            ) : error ? (
                <Typography variant="body2" color="error">
                    {error}
                </Typography>
            ) : (
                <ContentContainer>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    {isFinalResponse && sources && sources.length > 0 && (
                        <WidgetLupaiResources sources={sources} />
                    )}
                </ContentContainer>
            )}
        </WidgetLupaiAnswerContainer>
    );
};

export default WidgetLupaiAnswer;
