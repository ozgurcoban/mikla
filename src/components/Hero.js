import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledHero, Pizza, Grill, Catering, H1 } from '../styles/Hero.styled';

import Modal from './Modal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  console.log(showModal);
  return (
    <StyledHero>
      <Link to='/pizza'>
        <Pizza>
          <H1>Pizza</H1>
        </Pizza>
      </Link>
      <Grill>
        <H1>Grill</H1>
      </Grill>
      <Catering onClick={openModal}>
        <H1>Catering</H1>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Catering>
    </StyledHero>
  );
};

export default Hero;
