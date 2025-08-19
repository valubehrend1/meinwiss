import React, { forwardRef } from 'react';
import { StyledScrollableMessagesContainer } from './styles';

// Message area component with ref support
export const ScrollableMessagesContainer = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof StyledScrollableMessagesContainer>>(
    (props, ref) => (
        <StyledScrollableMessagesContainer
            ref={ref}
            {...props}
        />
    )
);
