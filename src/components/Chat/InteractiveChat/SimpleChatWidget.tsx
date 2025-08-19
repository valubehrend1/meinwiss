import React from 'react';
import { Typography } from '@mui/material';
import SharedSearchBar from '../../pages/shared/SharedSearchBar/SharedSearchBar';
import ErrorModal from '../ErrorModal/ErrorModal';
import { ScrollableMessagesContainer } from './ScrollableMessagesContainer';
import WidgetLupaiAnswer from './Widget/WidgetLupaiAnswer';
import WidgetUserQuestion from './Widget/WidgetUserQuestion';
import { WidgetMessageContainer } from './Widget/styles';
import {
    ChatWidgetInputArea,
    EmptyMessageContainer
} from './styles';
import { useChatWidget } from '../../../hooks/useChatWidget';

/**
 * Simplified Chat Widget component without header, designed to be used inside AuthenticatedChatWidget
 */
const SimpleChatWidget: React.FC = () => {
    const {
        messages,
        responseError,
        isErrorModalOpen,
        socketDown,
        hasSentMessage,
        messagesContainerRef,
        handleSendMessage,
        handleErrorModalClose,
        setisErrorModalOpen
    } = useChatWidget();

    return (
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

            <ErrorModal
                isOpen={isErrorModalOpen}
                onClose={handleErrorModalClose}
                content={responseError || 'An unexpected error occurred.'}
                setisOpen={setisErrorModalOpen}
            />
        </>
    );
};

export default SimpleChatWidget;
