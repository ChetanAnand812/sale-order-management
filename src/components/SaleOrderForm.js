import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, FormLabel, FormControl, VStack } from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';

const SaleOrderForm = ({ defaultValues, onSubmit, readOnly = false }) => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Customer ID</FormLabel>
          <Controller
            name="customer_id"
            control={control}
            render={({ field }) => <Input {...field} isReadOnly={readOnly} />}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Invoice Number</FormLabel>
          <Controller
            name="invoice_no"
            control={control}
            render={({ field }) => <Input {...field} isReadOnly={readOnly} />}
          />
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
        <Button type="submit" isDisabled={readOnly}>
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default SaleOrderForm;
