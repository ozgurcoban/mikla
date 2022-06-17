import styled from 'styled-components';

import pizza from '../assets/img/pizza.jpg';
import grill from '../assets/img/grill.jpg';
import catering from '../assets/img/catering.jpg';

export const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

export const Pizza = styled.div`
  background-image: url(${pizza});
  width: 250px;
  height: 150px;
  border-radius: 0.5rem;
  background-size: cover;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: white;
  position: relative;
  z-index: -1;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(px);
  }
`;

export const Grill = styled(Pizza)`
  background-image: url(${grill});
`;

export const Catering = styled(Grill)`
  background-image: url(${catering});
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  position: absolute;
`;

// export const Div = styled.div`
//   background-color: black;
//   opacity: ${({ theme }) => theme.opacity};
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   display: grid;
//   place-items: center;
// `;
