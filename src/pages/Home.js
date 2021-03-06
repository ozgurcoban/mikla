// components
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import CountdownTimer2 from '../components/CountdownTimer/CountdownTimer2';

import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import CarouselSection from '../components/Carousel/CarouselComponent';

const Home = ({ theme, toggleTheme }) => {
  //countdown timer
  // const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();
  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}
      <main>
        <Hero />

        <MenuSection />
        <AboutSection />
      </main>

      {/* <Footer /> */}
    </>

    /* <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <Div>
        <CountdownTimer2 countdownTimestampsMS={1643673600000} />
      </Div> */
  );
};

export default Home;
