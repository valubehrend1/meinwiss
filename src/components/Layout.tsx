import React from 'react';
import { Box } from '@mui/material';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from './pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <Navbar />
      <Box sx={{ flex: 1, overflowY: 'auto', marginBottom: '160px' }}>
        <Outlet />
      </Box>
      <Box sx={{ mt: 'auto' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
