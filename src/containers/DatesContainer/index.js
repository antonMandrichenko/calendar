import React from 'react';
import * as moment from 'moment';
// import DayView from '../../components/DayView'
import './DatesContainer.css';
import Arrow from "../../components/Arrow";
import ShowMonth from "../../components/ShowMonth";

const DatesContainer = ({ date,
                          toSelectedDate,
                          tasks,
                          toAddTask,
                          toSelectMonth,
                          selectedMonth
}) => {

  const getWeekdays = () => {
    const weekdays = moment.weekdaysShort();
    const Sun = weekdays.shift();
    weekdays.push(Sun);
    return weekdays;
  };

  const beginCalendar = () => {
    const startOfMonth = moment(date, 'D.MM.YYYY').startOf('month');
    const startCalendar = startOfMonth.clone();
    const lengthOfCalendar = 41;
    const arrayOfCalendar = [];
    const startWeekday = startOfMonth.weekday();
    const weekdays = getWeekdays();
    startCalendar.subtract(startWeekday-1, 'days');
    for(let i = 0; i <= lengthOfCalendar+weekdays.length; i++) {
      if (i < weekdays.length) {
        arrayOfCalendar.push(weekdays[i]);
      } else {
        arrayOfCalendar.push(startCalendar.format('D.MM.YYYY'));
        startCalendar.add(1, 'days');
      }
    }
    return arrayOfCalendar;
  };

  const array = beginCalendar();

  const selectedMonthByLetters = `${moment.months().filter((month,i) => 
    i === selectedMonth)[0]} 
      ${moment(date, 'D.MM.YYYY').get('year')}`;
  return (
    <div className="DatesContainer alert alert-secondary col-lg-6">
      <div className="DatesContainer__title">
        <Arrow direction={"fas fa-angle-left"}
               toSelectedDate={toSelectedDate}
        />
        <div className="DatesContainer__title_text"
             onClick={()=>{toSelectMonth(date)}}>
          {selectedMonth === ''
            ? date
            : selectedMonthByLetters}
        </div>
        <Arrow direction={"fas fa-angle-right"}
               toSelectedDate={toSelectedDate}
        />
      </div>
      <ShowMonth array={array}
                 date={date}
                 tasks={tasks}
                 toSelectedDate={toSelectedDate}
                 toAddTask={toAddTask}
      />
    </div>
  );
};

export default DatesContainer;
