import styled from 'styled-components';
import { bool } from 'prop-types';
import * as BsIcons from 'react-icons/bs';

const SideMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <h1>Miklagård</h1>
      <a href='/'>
        <span role='img' aria-label='home'>
          {/* &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f; */}
        </span>
        hem
      </a>
      <a href='/'>
        <span role='img' aria-label='menu'>
          {/* &#x1f4b8; */}
        </span>
        meny
      </a>
      <a href='/'>
        <span role='img' aria-label='about'>
          {/* &#x1f4e9; */}
        </span>
        hitta oss
      </a>
      <Wrapper>
        <p>följ oss</p>
        <Div>
          <BsIcons.BsInstagram />
          <BsIcons.BsFacebook />
        </Div>
      </Wrapper>
    </StyledMenu>
  );
};
SideMenu.protoTypes = {
  open: bool.isRequired,
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.sideMenuBackGround};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  overflow: hidden;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.2rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Wrapper = styled.div`
  width: 10rem;
  display: grid;
  place-items: center;
  p {
    text-transform: uppercase;
    font-weight: 600;
  }
  color: ${({ theme }) => theme.primaryDark};
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 0.4rem 0;
  color: ${({ theme }) => theme.primaryDark};
  svg {
    font-size: 1.8rem;
  }
`;
export default SideMenu;
