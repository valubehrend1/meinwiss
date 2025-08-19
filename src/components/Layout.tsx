import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <Box sx={{ flex: 1, overflowY: 'auto', marginBottom: '160px' }}>
        <Outlet />
      </Box>
      <Box sx={{ mt: 'auto' }}>
      </Box>
    </Box>
  );
};

export default Layout;
