import React, { forwardRef } from 'react';
import { Box } from '@mui/material';

// Componente de área de mensajes con soporte para refs
export const ScrollableMessagesContainer = forwardRef<HTMLDivElement, React.ComponentProps<typeof Box>>(
    (props, ref) => (
        <Box
            ref={ref}
            sx={{
                flex: '1',
                overflowY: 'auto',
                padding: '12px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px', // Reducido de 8px a 4px para disminuir el espacio entre mensajes
                scrollBehavior: 'smooth', // Para hacer el scroll suave
                ...props.sx
            }}
            {...props}
        />
    )
);
