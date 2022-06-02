import styled from 'styled-components';

export const Footer = () => {
  return <FooterStyled>Footers</FooterStyled>;
};

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 2.5rem;
  padding: 2rem 2rem 0 2rem;
  height: 4rem;
  background-color: red;
`;

/* background: black;
  width: 100%;
  color: white;
  padding: 2rem;
  display: grid;
  bottom: 0;
  position: relative;
  place-items: center; */
