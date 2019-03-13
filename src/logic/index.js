import * as moment from 'moment';

export const makeCalendar = (date) => {
  const startOfMonth = moment(date).startOf('month');
  const startCalendar = startOfMonth.clone();
  const lengthOfCalendar = 41;
  const arrayOfCalendar = [];
  const startWeekday = startOfMonth.weekday();
  // const weekdays = getWeekdays();
  startCalendar.subtract(startWeekday-1, 'days');
  for(let i = 0; i <= lengthOfCalendar; i++) {
    arrayOfCalendar.push(startCalendar.format('D.MM.YYYY'));
    startCalendar.add(1, 'days');
  }
  return arrayOfCalendar;
};

export const getWeekdays = () => {
  const weekdays = moment.weekdaysShort();
  const Sun = weekdays.shift();
  weekdays.push(Sun);
  return weekdays;
};

export const selectedMonthByLetters = (date) => {
  return `${moment.months().filter((month,i) =>
    i === moment(date).get("month"))[0]} ${moment(date).get('year')}`
};
