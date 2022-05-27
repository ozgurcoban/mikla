import { useState } from 'react';

// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { theme } from './styles/theme';

import { dark, light } from './styles/ModeTheme';

// components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [modeTheme, setModeTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
