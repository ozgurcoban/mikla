import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';
import styled from 'styled-components';

const ExpiredNotice = () => {
  return (
    <div className='expired-notice'>
      <span>Miklagård är nu öppet! Varmt välkomna!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='show-counter'>
      <a href='/' className='countdown-link'>
        <DateTimeDisplay value={days} type={'Dagar'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Timmar'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Minuter'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Sekunder'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <StyledCountdown>
        <Div>
          <h1>
            Turkisk Grill & Meze på
            <span>
              <strong> Miklagård </strong>
            </span>
            i Uppsala
          </h1>
          <p>premiär om:</p>
        </Div>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </StyledCountdown>
    );
  }
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 1.5rem;
  h1 {
    line-height: 4.5rem;
  }
  p {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1rem;
  }
  span {
    color: #333;
  }
`;

const StyledCountdown = styled.div`
  .expired-notice {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    margin: 0.5rem;
  }

  .expired-notice > span {
    font-size: 2.5rem;
    font-weight: bold;
    color: red;
  }

  .expired-notice > p {
    font-size: 1.5rem;
  }

  .show-counter {
    padding: 0.5rem;
  }

  .show-counter .countdown-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    text-decoration: none;
    color: #000;
  }

  .show-counter .countdown {
    line-height: 1.25rem;
    padding: 0 0.75rem 0 0.75rem;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .show-counter .countdown.danger {
    color: #ff0000;
  }

  .show-counter .countdown > p {
    margin: 0;
  }

  .show-counter .countdown > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export default CountdownTimer;
