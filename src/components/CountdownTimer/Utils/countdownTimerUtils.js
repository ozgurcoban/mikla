import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return seconds;
};

const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return minutes;
};

const getRemainingHours = (nowDayjs, timestampDayjs) => {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  return hours;
};

const getRemainingDays = (nowDayjs, timestampDayjs) => {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  return days;
};
