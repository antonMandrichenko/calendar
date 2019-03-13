import React from 'react';
import './DaysView.css';
import TaskInDate from "../TaskInDate";

const DayView = ({
                   day,
                   date,
                   className,
                   toSelectedDate,
                   tasks
}) => {

  return (
    <div className={`DayView DayView__`+ className}
         onClick={toSelectedDate}
         data-date={date}>
      {tasks.map((task) =>
        task[Object.keys(task)[0]].length !== 0
        && Object.keys(task)[0] === date
          ? <TaskInDate key={date}/>
          : null
      )}
      {day}
    </div>
  );
};

export default DayView;
