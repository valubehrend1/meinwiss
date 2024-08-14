import React from 'react';

import { Box } from '@mui/material';

import Navbar from './Navbar/Navbar';

import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {

  return (
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
