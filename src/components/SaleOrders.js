import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import SaleOrderModal from './SaleOrderModal';

const SaleOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [readOnly, setReadOnly] = useState(false);

  const handleCreateOrder = () => {
    setModalData({}); // empty data for new order
    setReadOnly(false);
    setIsModalOpen(true);
  };

  const handleEditOrder = (order) => {
    setModalData(order);
    setReadOnly(false);
    setIsModalOpen(true);
  };

  const handleViewOrder = (order) => {
    setModalData(order);
    setReadOnly(true);
    setIsModalOpen(true);
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Active Sale Orders</Tab>
        <Tab>Completed Sale Orders</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Button onClick={handleCreateOrder}>+ Sale Order</Button>
          {/* Render active sale orders here, with edit and view actions */}
        </TabPanel>
        <TabPanel>
          {/* Render completed sale orders here, with view actions */}
        </TabPanel>
      </TabPanels>

      {isModalOpen && (
        <SaleOrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultValues={modalData}
          onSubmit={(data) => console.log(data)} // replace with actual submit handler
          readOnly={readOnly}
        />
      )}
    </Tabs>
  );
};

export default SaleOrders;
