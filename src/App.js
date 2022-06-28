import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/global';
// components
import Home from './pages/Home';
import { Menu } from './pages/MenuPage';
import { Catering } from './pages/CateringPage';
import { Error } from './pages/Error';

import { useDarkMode } from './hooks/useDarkMode.js';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <div id='app'>
      <BrowserRouter>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route
              path='/'
              element={<Home theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route path='menu' element={<Menu />} />
              <Route path='catering' element={<Catering />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
