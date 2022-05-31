import React from 'react';
import { FiSun, FaRegMoon } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

export const Toggle = ({ theme, toggleTheme }) => {
  // console.log(theme);
  // console.log(toggleTheme);
  return (
    <button className='btn-primary' onClick={toggleTheme}>
      {theme === 'light' ? <FiSun /> : <FaMoon />}
    </button>
  );
};
