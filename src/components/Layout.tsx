import React from 'react';

import { Box } from '@mui/material';

import Navbar from '../components/shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';

import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {

  return (
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
