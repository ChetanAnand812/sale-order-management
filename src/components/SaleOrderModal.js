import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';

const SaleOrderModal = ({ isOpen, onClose, initialData, onSubmit, readOnly = false }) => {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
    defaultValues: initialData,
  });

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{readOnly ? 'View Sale Order' : 'Create a Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} as="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <FormControl id="CustomerID" isInvalid={errors.CustomerID}>
              <FormLabel>Customer ID</FormLabel>
              <Input type="number" {...register('CustomerID', { required: 'Customer ID is required' })} isReadOnly={readOnly} />
              <FormErrorMessage>{errors.CustomerID && errors.CustomerID.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="customerName" isInvalid={errors.customerName}>
              <FormLabel>Customer Name</FormLabel>
              <Input type="text" {...register('customerName', { required: 'Customer Name is required' })} isReadOnly={readOnly} />
              <FormErrorMessage>{errors.customerName && errors.customerName.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="price" isInvalid={errors.price}>
              <FormLabel>Price</FormLabel>
              <Input type="number" {...register('price', { required: 'Price is required' })} isReadOnly={readOnly} />
              <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
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
            {!readOnly && (
              <Button type="submit" colorScheme="teal">
                Submit
              </Button>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
