import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from '../styles/Modal.styled';

import CateringForm from './CateringForm/CateringForm';

export default function Modal({ showModal, setShowModal }) {
  const closeModal = () => {
    setShowModal(prev => prev);
    console.log(showModal);
  };

  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transition: showModal ? `translateY(0%)` : `translateX(-100%)`,
  });
  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <CateringForm />
              <CloseModalButton aria-label='Close modal' onClick={closeModal} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}
