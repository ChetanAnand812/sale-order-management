import React, { useState } from 'react';
import { Button, Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import SaleOrderModal from '../components/SaleOrderModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [readOnly, setReadOnly] = useState(false);
  const [activeSaleOrders, setActiveSaleOrders] = useState([
    { CustomerID: 1, customerName: 'Chetan', price: 100, invoice_date: '24/5/2024 (11:07 PM)' },
    { CustomerID: 2, customerName: 'Raj', price: 210, invoice_date: '24/5/2024 (11:30 PM)' },
  ]);
  const [completedSaleOrders] = useState([
    { CustomerID: 1, customerName: 'Pratyush', price: 150, invoice_date: '22/5/2024 (10:00 AM)' },
    { CustomerID: 2, customerName: 'Rupesh', price: 220, invoice_date: '20/5/2024 (02:45 PM)' },
  ]);

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
    if (modalData) {
      // Edit existing order
      setActiveSaleOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.CustomerID === modalData.CustomerID ? { ...order, ...data } : order
        )
      );
    } else {
      // Create new order
      const newSaleOrder = {
        ...data,
        CustomerID: activeSaleOrders.length + 1,
        invoice_date: new Date().toLocaleString(),
      };
      setActiveSaleOrders((prevOrders) => [...prevOrders, newSaleOrder]);
    }
    setIsModalOpen(false);
  };

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
                  <Th>Invoice Date</Th>
                  <Th>Edit/View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {activeSaleOrders.map((order) => (
                  <Tr key={order.CustomerID}>
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
                  <Th>Invoice Date</Th>
                  <Th>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                {completedSaleOrders.map((order) => (
                  <Tr key={order.CustomerID}>
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
