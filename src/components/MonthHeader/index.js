import React from 'react';
import {selectedMonthByLetters} from '../../logic';
import './MonthHeader.css';

const MonthHeader = ({date}) => {
  return (
    <div className={"MonthHeader"}>
      {selectedMonthByLetters(date)}
    </div>
  );
};

export default MonthHeader;
