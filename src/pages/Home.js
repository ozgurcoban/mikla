import styled from 'styled-components';
import { LinkBoxContainer } from '../components/LinkBoxContainer';

// components
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import CountdownTimer2 from '../components/CountdownTimer/CountdownTimer2';

const Home = () => {
  //countdown timer
  const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <LinkBoxContainer />
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
