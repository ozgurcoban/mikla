import { useState } from 'react';
import styled from 'styled-components';

import image from '../assets/img/hero_background.jpg';
import CarouselComponent from './Carousel/CarouselComponent';

import Modal from './Modal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {};

  return (
    <Section>
      <CarouselComponent />
    </Section>
  );
};

export default Hero;

// const Section = styled.section`
//   height: 80vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   background-color: lightCoral;
// `;

const Section = styled.section``;
