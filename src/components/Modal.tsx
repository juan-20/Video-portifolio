import React, { useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  title: string;
  content: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const Modal = ({ title, content, isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    <>
      <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="custom-modal"
        className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </ReactModal>
    </>
  );
};