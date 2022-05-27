import { useState, useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger/Burger';
import SideMenu from './SideMenu/SideMenu';

const Navbar = () => {
  // hamburger menu
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Burger open={open} setOpen={setOpen} />
      <SideMenu open={open} setOpen={setOpen} />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

export default Navbar;
