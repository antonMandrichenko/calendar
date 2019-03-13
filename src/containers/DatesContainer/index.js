import React from 'react';
import {makeCalendar} from '../../logic';
import ShowMonth from "../../components/ShowMonthDays";
import './DatesContainer.css';

const DatesContainer = ({ selectedDate,
                          toSelectedDate,
                          tasks
}) => {

  const daysOfMonth = makeCalendar(selectedDate);

  return (
    <div className="DatesContainer">
      <ShowMonth daysOfMonth={daysOfMonth}
                 date={selectedDate.format('D.MM.YYYY')}
                 tasks={tasks}
                 toSelectedDate={toSelectedDate}
      />
    </div>
  );
};

export default DatesContainer;
