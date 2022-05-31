import styled from 'styled-components';

export const Footer = () => {
  return <FooterStyled>Footers</FooterStyled>;
};

const FooterStyled = styled.footer`
  background: black;

  bottom: '0';
  width: 100%;
  color: white;
  padding: 2rem;
  display: grid;

  place-items: center;
`;
