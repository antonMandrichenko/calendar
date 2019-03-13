import React from 'react';

const Weekdays = ({day, date}) => {
  return (
    <div data-date={date}>
      {day}
    </div>
  );
};

export default Weekdays;
