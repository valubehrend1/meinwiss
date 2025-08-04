import React from 'react';
import { ChatItemProps } from '../types';
import { formatDate, getChatItemStyles } from '../utils';
import { ListItemText } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import {
    StyledListItem,
    StyledIconButton
} from '../styles';

const ChatItem: React.FC<ChatItemProps> = ({
    chat,
    onTogglePin,
    showPinButton = true,
    isPinnedPanel = false
}) => {
    const handleTogglePin = () => {
        if (onTogglePin) {
            onTogglePin(chat.id);
        }
    };

    const styleVariant = getChatItemStyles(isPinnedPanel, chat.pinned);

    return (
        <StyledListItem
            isPinned={chat.pinned}
            isPinnedPanel={isPinnedPanel}
            styleVariant={styleVariant}
            secondaryAction={
                showPinButton && (
                    <StyledIconButton
                        edge="end"
                        onClick={handleTogglePin}
                        styleVariant={styleVariant}
                    >
                        {chat.pinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
                    </StyledIconButton>
                )
            }
        >
            <ListItemText
                primary={chat.title}
                secondary={formatDate(chat.timestamp)}
                primaryTypographyProps={{
                    style: { color: styleVariant.color }
                }}
                secondaryTypographyProps={{
                    style: { color: styleVariant.secondaryColor }
                }}
            />
        </StyledListItem>
    );
};

export default ChatItem;
