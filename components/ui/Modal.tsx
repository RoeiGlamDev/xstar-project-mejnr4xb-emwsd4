'use client';

Here's a simple implementation of a modal component in TypeScript for your luxury dark AirBNB website named HouseIL. This modal component is styled with a focus on elegance, using pink and black colors.

// components/ui/Modal.tsx

import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ff69b4; /* Pink color */
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #ff1493; /* Darker pink on hover */
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

### Explanation:
- **Overlay**: A styled div that covers the entire screen with a semi-transparent black background when the modal is open.
- **ModalContainer**: The main container for the modal content, styled with a dark background and rounded corners.
- **CloseButton**: A button to close the modal, styled in pink and changes color on hover.
- **Modal Component**: Accepts `isOpen`, `onClose`, and `children` as props. It renders the modal only when `isOpen` is true and prevents clicks inside the modal from closing it.

### Usage:
You can use this modal component in your application like this:

import React, { useState } from 'react';
import Modal from './components/ui/Modal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Welcome to HouseIL</h2>
        <p>This is a luxury experience.</p>
      </Modal>
    </div>
  );
};

export default App;

This example shows how to toggle the modal open and closed with a button. Adjust the styles and content as needed to fit your design vision!