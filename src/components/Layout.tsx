import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <Outlet />
      </Box>
      <Box sx={{ mt: 'auto' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
