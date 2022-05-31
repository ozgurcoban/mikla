import { useState, useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger/Burger';
import SideMenu from './SideMenu/SideMenu';
// import { Toggle } from './Toggle';
// import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  // hamburger menu
  const [open, setOpen] = useState(false);
  // const [theme, toggleTheme] = useDarkMode();

  return (
    <Nav>
      <Burger open={open} setOpen={setOpen} />
      {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
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

export default Navbar;
