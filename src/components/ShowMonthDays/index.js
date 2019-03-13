import React from 'react';
import DayView from "../../components/DayView";
import './ShowMonth.css';

const ShowMonth = ({
                     daysOfMonth,
                     date,
                     toSelectedDate,
                     tasks
}) => {

  return (
    <div className="DaysContainer">
      {daysOfMonth.map((day, i) => {
          const monthArr = day.slice(day.indexOf('.')+1, day.indexOf('.')+3);
          const monthSelected = date.slice(date.indexOf('.')+1, date.indexOf('.')+3);
          return <DayView key={i}
                          tasks={tasks}
                          day={day.slice(0, day.indexOf('.'))}
                          date={day}
                          className= {
                            monthArr !== monthSelected
                              ? 'noactive'
                              : date === day
                                ? 'selected'
                                : 'active'
                          }
                          toSelectedDate={toSelectedDate}
          />
        }
      )}
    </div>
  );
};

export default ShowMonth;
