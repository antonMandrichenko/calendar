import React from 'react';
import DayView from "../../components/DayView";

const ShowMonth = ({array, date, tasks, toSelectedDate, toAddTask}) => {

  return (
    <div className="DaysContainer">
      {array.map((day, i) => {
          const monthArr = day.slice(day.indexOf('.')+1, day.indexOf('.')+3);
          const monthSelected = date.slice(date.indexOf('.')+1, date.indexOf('.')+3);
          return <DayView key={i}
                          tasks={tasks}
                          day={i<7
                            ? day
                            : day.slice(0, day.indexOf('.'))}
                          date={day}
                          className= {
                            i<7
                              ? 'alert alert-secondary'
                              : monthArr !== monthSelected
                              ? 'alert alert-dark'
                              : date === day
                                ? 'alert alert-warning'
                                : 'alert alert-light'
                          }
                          toSelectedDate={toSelectedDate}
                          toAddTask={toAddTask}
          />
        }
      )}
    </div>
  );
};

export default ShowMonth;
