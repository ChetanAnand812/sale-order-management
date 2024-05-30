import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';

const SaleOrderModal = ({ isOpen, onClose, initialData, onSubmit, readOnly = false }) => {
  const { register, handleSubmit, reset, control } = useForm({
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
        <ModalHeader>{readOnly ? 'View Sale Order' : 'Create a sale order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} as="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <FormControl id="CustomerID">
              <FormLabel>Customer ID</FormLabel>
              <Input type="number" {...register('CustomerID')} isReadOnly={readOnly} />
            </FormControl>
            <FormControl id="customerName">
              <FormLabel>Customer Name</FormLabel>
              <Input type="text" {...register('customerName')} isReadOnly={readOnly} />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input type="number" {...register('price')} isReadOnly={readOnly} />
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
          </VStack>
        </ModalBody>

        {!readOnly && (
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
