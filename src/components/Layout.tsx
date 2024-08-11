import React, { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import Navbar from './Navbar/Navbar';

import { useLocation, Outlet, useParams } from 'react-router-dom';

const Layout: React.FC = () => {

  return (
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
