import DownloadIcon from '@mui/icons-material/Download';
import MaximizeIcon from '@mui/icons-material/ExpandLess';
import MinimizeIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import React from 'react';

import SharedSearchBar from '../../pages/shared/SharedSearchBar/SharedSearchBar';
import ErrorModal from '../ErrorModal/ErrorModal';
import { ScrollableMessagesContainer } from './ScrollableMessagesContainer';
import WidgetLupaiAnswer from './Widget/WidgetLupaiAnswer';
import WidgetUserQuestion from './Widget/WidgetUserQuestion';
import { WidgetMessageContainer } from './Widget/styles';

import {
    ChatWidgetContainer,
    ChatWidgetHeader,
    ChatWidgetInputArea,
    DownloadButton,
    EmptyMessageContainer,
    MinimizeButton
} from './styles';

import { useChatWidget } from '../../../hooks/useChatWidget';
import { generatePdf, generateTextFallback } from '../../../utils/pdfUtils';

/**
 * Chat Widget component designed to be used inside an iframe
 */
const ChatWidget: React.FC = () => {
    const {
        messages,
        responseError,
        isErrorModalOpen,
        socketDown,
        hasSentMessage,
        isMinimized,
        messagesContainerRef,
        toggleMinimize,
        handleSendMessage,
        handleErrorModalClose,
        setisErrorModalOpen
    } = useChatWidget();

    /**
     * Handles PDF download
     */
    const handleDownloadPdf = () => {
        try {
            generatePdf(messages);
        } catch (error) {
            console.error('Error generating PDF:', error);
            // Fallback: download as plain text
            generateTextFallback(messages);
        }
    };

    return (
        <ChatWidgetContainer>
            <ChatWidgetHeader>
                <Typography variant="h6">Assistant</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {messages.length > 0 && (
                        <DownloadButton
                            size="small"
                            aria-label="download conversation as PDF"
                            onClick={handleDownloadPdf}
                        >
                            <DownloadIcon />
                        </DownloadButton>
                    )}
                    <MinimizeButton onClick={toggleMinimize} aria-label="toggle chat">
                        {isMinimized ? <MaximizeIcon /> : <MinimizeIcon />}
                    </MinimizeButton>
                </Box>
            </ChatWidgetHeader>

            {!isMinimized && (
                <>
                    <ScrollableMessagesContainer ref={messagesContainerRef}>
                        {messages.length === 0 ? (
                            <EmptyMessageContainer>
                                <Typography variant="body2">
                                    Ask your first question to start
                                </Typography>
                            </EmptyMessageContainer>
                        ) : (
                            messages.map((message, index) => (
                                <WidgetMessageContainer key={index} sender={message.sender}>
                                    {message.sender === 'user' ? (
                                        <WidgetUserQuestion content={message.content} />
                                    ) : (
                                        <WidgetLupaiAnswer
                                            content={typeof message.content === 'string' ? message.content : JSON.stringify(message.content)}
                                            sources={message.sources || []}
                                            isFinalResponse={message.isFinalResponse || false}
                                            error={message.error}
                                        />
                                    )}
                                </WidgetMessageContainer>
                            ))
                        )}
                    </ScrollableMessagesContainer>

                    <ChatWidgetInputArea>
                        <SharedSearchBar
                            sendMessage={handleSendMessage}
                            disabled={hasSentMessage || socketDown}
                        />
                    </ChatWidgetInputArea>
                </>
            )}

            <ErrorModal
                isOpen={isErrorModalOpen}
                onClose={handleErrorModalClose}
                content={responseError || 'An unexpected error occurred.'}
                setisOpen={setisErrorModalOpen}
            />
        </ChatWidgetContainer>
    );
};

export default ChatWidget;
