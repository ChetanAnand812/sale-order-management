import React, { useState } from 'react';
import { Button, Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import SaleOrderModal from '../components/SaleOrderModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [readOnly, setReadOnly] = useState(false);

  const handleCreateClick = () => {
    setModalData(null);
    setReadOnly(false);
    setIsModalOpen(true);
  };

  const handleEditClick = (data) => {
    setModalData(data);
    setReadOnly(false);
    setIsModalOpen(true);
  };

  const handleViewClick = (data) => {
    setModalData(data);
    setReadOnly(true);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission logic
  };

  const activeSaleOrders = [
    { CustomerID: 1, customerName: 'Spider', price: 100, invoice_date: '24/5/2024 (11:07 PM)' },
    { CustomerID: 2, customerName: 'Spider', price: 210, invoice_date: '24/5/2024 (11:30 PM)' },
  ];

  const completedSaleOrders = [
    { CustomerID: 3, customerName: 'Ant', price: 150, invoice_date: '22/5/2024 (10:00 AM)' },
    { CustomerID: 4, customerName: 'Bee', price: 220, invoice_date: '20/5/2024 (02:45 PM)' },
  ];

  return (
    <Box p={8}>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={handleCreateClick}>
      Sale Order
      </Button>

      <Tabs mt={4}>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Customer ID</Th>
                  <Th>Customer Name</Th>
                  <Th>Price (₹)</Th>
                  <Th>Last Modified</Th>
                  <Th>Edit/View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {activeSaleOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>{order.CustomerID}</Td>
                    <Td>{order.customerName}</Td>
                    <Td>₹ {order.price}</Td>
                    <Td>{order.invoice_date}</Td>
                    <Td>
                      <IconButton
                        icon={<EditIcon />}
                        onClick={() => handleEditClick(order)}
                        mr={2}
                      />
                      <IconButton
                        icon={<EditIcon />}
                        onClick={() => handleViewClick(order)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Customer ID</Th>
                  <Th>Customer Name</Th>
                  <Th>Price (₹)</Th>
                  <Th>Last Modified</Th>
                  <Th>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {completedSaleOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>{order.CustomerID}</Td>
                    <Td>{order.customerName}</Td>
                    <Td>₹ {order.price}</Td>
                    <Td>{order.invoice_date}</Td>
                    <Td>
                      <IconButton
                        icon={<EditIcon />}
                        onClick={() => handleViewClick(order)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {isModalOpen && (
        <SaleOrderModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          initialData={modalData}
          onSubmit={handleFormSubmit}
          readOnly={readOnly}
        />
      )}
    </Box>
  );
};

export default HomePage;
