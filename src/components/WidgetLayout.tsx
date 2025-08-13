import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

/**
 * Layout sin navegación ni footer para componentes como el widget de chat
 */
const WidgetLayout: React.FC = () => {
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Outlet />
        </Box>
    );
};

export default WidgetLayout;
