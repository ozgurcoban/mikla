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

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    main {
    width: 90%;
    margin: 0 auto;
    }
  }

  `;

export const lightTheme = {
  body: 'f4f4f4',
  text: '#121212',
  primary: '#6200ee',
  sideMenuBackGround:
    'linear-gradient(0deg, rgba(237,239,255,1) 33%, rgba(255,210,213,1) 100%)',
  opacity: '0.6',
};

export const darkTheme = {
  body: '#1b1b1b',
  text: '#fff',
  primary: '#bb86fc',
  sideMenuBackGround: 'rgb(42, 43, 46)',
  opacity: '0.2',
};
