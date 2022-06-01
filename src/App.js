import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/global';
// components
import Home from './pages/Home';

import { useDarkMode } from './hooks/useDarkMode.js';
import { Toggle } from './components/Toggle';
import { Footer } from './components/Footer';
import { Menu } from './pages/MenuPage';
import { Catering } from './pages/CateringPage';
import { Error } from './pages/Error';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <div id='container'>
      <BrowserRouter>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='menu' element={<Menu />} />
              <Route path='catering' element={<Catering />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
