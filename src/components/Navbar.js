import { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import Burger from './Burger/Burger';
import SideMenu from './SideMenu/SideMenu';
// import { Toggle } from './Toggle';
// import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  // hamburger menu
  const [open, setOpen] = useState(false);
  // const [theme, toggleTheme] = useDarkMode();
  // console.log(toggleTheme);

  return (
    <Nav>
      <BurgerWrapper>
        <Burger open={open} setOpen={setOpen} />
      </BurgerWrapper>
      {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      <Wrapper>
        <Link to='/'>Home</Link>
        <Link to='menu'>Meny</Link>
        <Link to='catering'>Catering</Link>
      </Wrapper>
      <SideMenu open={open} setOpen={setOpen} />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
`;

const Wrapper = styled.div`
  @media (max-width: 578px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  @media (min-width: 578px) {
    display: none;
  }
`;

export default Navbar;
