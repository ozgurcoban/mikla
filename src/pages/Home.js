import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// components
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import CountdownTimer2 from '../components/CountdownTimer/CountdownTimer2';
import { LinkCardContainer } from '../components/LinkCardContainer';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const Home = () => {
  //countdown timer
  // const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();
  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <Navbar />
      <LinkCardContainer />
      <Outlet />
      <Footer />
    </div>

    /* <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <Div>
        <CountdownTimer2 countdownTimestampsMS={1643673600000} />
      </Div> */
  );
};

// const Div = styled.div`
//   display: flex;
//   height: 100px;
//   align-items: center;
//   justify-content: center;
//   width: 100vw;
// `;

export default Home;
