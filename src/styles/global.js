import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }

  .btn-primary {
    background: transparent;
    color: ${({ theme }) => theme.text};
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
    position: absolute;
    top: 1.5rem;
    right: 2rem
  }
    
    /* align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.50s linear; 
  }*/
  `;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  primary: '#6200ee',
  sideMenu: 'red',
};

export const darkTheme = {
  body: 'black',
  text: '#fff',
  primary: '#bb86fc',
  sideMenu: 'orange',
};
