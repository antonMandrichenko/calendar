import React from 'react';
import './DaysView.css';
import TaskInDate from "../TaskInDate";

const DayView = (props) => {
  return (
    <div className={`DayView `+ props.className}
         onClick={props.toSelectedDate}
         data-date={props.date}>
      {props.tasks.filter((task) =>
        task.time === props.date
      ).map((item,i) => {
          if (i === 0) return <TaskInDate key={i}/>
        }
      )}
      {props.day}
    </div>
  );
};

export default DayView;
