import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import Burger from './Burger/Burger';
import SideMenu from './SideMenu/SideMenu';
import { Toggle } from './Toggle';

const Navbar = ({ theme, toggleTheme }) => {
  // hamburger menu
  const [open, setOpen] = useState(false);
  // const [theme, toggleTheme] = useDarkMode();
  // console.log(toggleTheme);

  return (
    <Header>
      <Container>
        <Burger open={open} setOpen={setOpen} />
        <Toggle theme={theme} toggleTheme={toggleTheme} />

        <LinkWrapper>
          <Link to='/'>Home</Link>
          <Link to='menu'>Meny</Link>
          <Link to='catering'>Catering</Link>
        </LinkWrapper>
        <SideMenu open={open} setOpen={setOpen} />
      </Container>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  position: absolute;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled.div`
  @media (max-width: 578px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 578px) {
    display: none;
  }
`;

export default Navbar;
