import React from 'react';
import './ButtonTaskCompleted.css';

const ButtonTaskCompleted = ({completed, date, id, changeCompleted}) => {
  return (
    <div className="ButtonTaskCompleted"
         onClick={()=>{changeCompleted(id, date, completed)}}>
      {completed
        ? <i className="fas fa-star"></i>
        : <i className="far fa-star"></i>
      }
    </div>
  );
};

export default ButtonTaskCompleted;
