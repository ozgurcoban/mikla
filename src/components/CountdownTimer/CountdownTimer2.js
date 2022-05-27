import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './Utils/countdownTimerUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const CountdownTimer2 = ({ countdownTimestampsMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampsMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampsMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <Div>
      <span>{remainingTime.days}</span>
      <span>dagar</span>
      <span>{remainingTime.hours}</span>
      <span>timmar</span>
      <span>{remainingTime.minutes}</span>
      <span>minuter</span>
      <span>{remainingTime.seconds}</span>
      <span>sekunder</span>
    </Div>
  );
};

const Div = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef5;

  span {
    margin: 0 2px;
  }
`;

export default CountdownTimer2;
