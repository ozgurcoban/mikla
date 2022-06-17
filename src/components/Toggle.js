import React from 'react';
import { FiSun, FaRegMoon } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

export const Toggle = ({ theme, toggleTheme }) => {
  // console.log(toggleTheme);
  return (
    <Button className='TOGGLE' onClick={toggleTheme}>
      {theme === 'light' ? <FiSun /> : <FaMoon />}
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s linear;
  /* position: absolute; */
  /* top: 1.2rem;
  right: 0rem; */
`;
