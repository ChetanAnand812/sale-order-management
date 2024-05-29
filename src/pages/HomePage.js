import React from 'react';
import SaleOrders from '../components/SaleOrders';
import ThemeToggle from '../components/ThemeToggle';
import { Box, Heading } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Sale Order Management</Heading>
      <ThemeToggle />
      <SaleOrders />
    </Box>
  );
};

export default HomePage;
