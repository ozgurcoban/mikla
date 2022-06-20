import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  StyledHero,
  Pizza,
  Grill,
  Catering,
  H1,
  Div,
  Img,
  Span,
} from '../styles/Hero.styled';
import { Container } from '../styles/Container.styled';

const Hero = () => {
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
      <Catering>
        <H1>Catering</H1>
      </Catering>
    </StyledHero>
  );
};

export default Hero;
