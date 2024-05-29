import React, { useState } from 'react';
import SaleOrderForm from '../components/SaleOrderForm';
import SaleOrders from '../components/SaleOrders';

const HomePage = () => {
  const [editData, setEditData] = useState(null);

  const handleEdit = (data) => {
    setEditData(data);
  };

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log('Form submitted:', data);
    setEditData(null);
  };

  return (
    <div>
      <SaleOrders onEdit={handleEdit} />
      {editData && (
        <SaleOrderForm initialData={editData} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default HomePage;
