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
  position: relative;
  min-height: 100vh;
}
    

  `;

export const lightTheme = {
  body: 'linear-gradient(0deg, rgba(148,156,229,1) 25%, rgba(241,178,182,1) 100%)',
  text: '#121212',
  primary: '#6200ee',
  sideMenuBackGround:
    'linear-gradient(0deg, rgba(237,239,255,1) 33%, rgba(255,210,213,1) 100%)',
};

export const darkTheme = {
  body: '#1b1b1b',
  text: '#fff',
  primary: '#bb86fc',
  sideMenuBackGround: 'rgb(42, 43, 46)',
};
