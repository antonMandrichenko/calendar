import React from 'react';
import './WeekView.css';

const WeekView = ({weekday}) => {
  return (
    <div className={"WeekView"}>
      {weekday}
    </div>
  );
};

export default WeekView;
