import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderModal = ({ isOpen, onClose, defaultValues, onSubmit, readOnly }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{readOnly ? 'View Sale Order' : 'Edit Sale Order'}</ModalHeader>
        <ModalBody>
          <SaleOrderForm defaultValues={defaultValues} onSubmit={onSubmit} readOnly={readOnly} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
