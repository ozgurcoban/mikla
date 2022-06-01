import styled from 'styled-components';

export const Footer = () => {
  return <FooterStyled>Footers</FooterStyled>;
};

const FooterStyled = styled.footer`
  background: black;
  width: 100%;
  color: white;
  padding: 2rem;
  display: grid;
  bottom: 0;
  position: absolute;
  place-items: center;
`;
