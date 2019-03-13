import React from 'react';
import './Arrow.css';

const Arrow = ({direction, toSelectedDate}) => {
  return (
    <div className="Arrow" onClick={toSelectedDate}>
      <i className={direction} aria-hidden="true"></i>
    </div>
  );
};

export default Arrow;
