import React from 'react';
import './ButtonClose.css';

const ButtonClose = ({closeFormForAddTask}) => {

  return (
    <div className="ButtonClose btn btn-light"
         onClick={closeFormForAddTask}>
      X
    </div>
  );
};

export default ButtonClose;
