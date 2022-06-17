import styled from 'styled-components';
import { StyledHero, Pizza, Grill, Catering, H1 } from '../styles/Hero.styled';
import { Container } from '../styles/Container.styled';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Pizza>
          <H1>Pizza</H1>
        </Pizza>
        <Grill>
          <H1>Grill</H1>
        </Grill>
        <Catering>
          <H1>Catering</H1>
        </Catering>
      </Container>
    </StyledHero>
  );
};

export default Hero;
