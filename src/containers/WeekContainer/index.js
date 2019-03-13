import React from 'react';
import {getWeekdays} from '../../logic';
import WeekView from "../../components/WeekView";
import './WeekContainer.css';

const WeekContainer = () => {

  const weekdays = getWeekdays();
  return (
    <div className={"WeekContainer"}>
      {weekdays.map((weekday, i) =>
        <WeekView  key={i}
                   weekday={weekday}
        />
      )}
    </div>
  );
};

export default WeekContainer;
