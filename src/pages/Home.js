import { Outlet } from 'react-router-dom';

// components
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import CountdownTimer2 from '../components/CountdownTimer/CountdownTimer2';

import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import Hero from '../components/Hero';

const Home = ({ theme, toggleTheme }) => {
  //countdown timer
  // const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();
  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Outlet />
      <Footer />
    </>

    /* <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <Div>
        <CountdownTimer2 countdownTimestampsMS={1643673600000} />
      </Div> */
  );
};

export default Home;
