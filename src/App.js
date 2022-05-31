import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/global';
// components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useDarkMode } from './hooks/useDarkMode.js';
import { Toggle } from './components/Toggle';
import { Footer } from './components/Footer';
import { Menu } from './pages/MenuPage';
import { Catering } from './pages/CateringPage';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='menu' element={Menu} />
          <Route path='catering' element={Catering} />
        </Routes>
        <GlobalStyles />
        <Navbar />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Home />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
