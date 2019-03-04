import React from 'react';
import './Arrow.css';

const Arrow = ({direction, toSelectedDate}) => {
  return (
    <div className="Arrow" onClick={toSelectedDate}>
      <i className={direction}></i>
    </div>
  );
};

export default Arrow;
