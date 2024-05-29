import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Input, VStack, FormControl, FormLabel } from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';

const SaleOrderForm = ({ initialData, onSubmit, readOnly = false }) => {
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: initialData,
  });

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Box p={8} as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack spacing={4}>
        <FormControl id="CustomerID">
          <FormLabel>Customer ID</FormLabel>
          <Input type="number" {...register('CustomerID')} />
        </FormControl>
        <FormControl id="customerName">
          <FormLabel>Customer Name</FormLabel>
          <Input type="text" {...register('customerName')} />
        </FormControl>
        <FormControl id="invoiceNumber">
          <FormLabel>Invoice Number</FormLabel>
          <Input type="number" {...register('invoiceNumber')} />
        </FormControl>
        <FormControl>
          <FormLabel>Invoice Date</FormLabel>
          <Controller
            name="invoice_date"
            control={control}
            render={({ field }) => (
              <DatePicker {...field} isReadOnly={readOnly} />
            )}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default SaleOrderForm;
