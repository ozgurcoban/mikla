import styled from 'styled-components';

import pizza from '../assets/img/pizza.jpg';
import grill from '../assets/img/grill.jpg';
import catering from '../assets/img/catering.jpg';

export const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Pizza = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${pizza});
  width: 250px;
  height: 150px;
  border-radius: 0.5rem;
  background-size: cover;
  color: white;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
`;

export const Grill = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${grill});
  width: 250px;
  height: 150px;
  border-radius: 0.5rem;
  background-size: cover;
  color: white;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
`;

export const Catering = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${catering});
  width: 250px;
  height: 150px;
  border-radius: 0.5rem;
  background-size: cover;
  color: white;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;
