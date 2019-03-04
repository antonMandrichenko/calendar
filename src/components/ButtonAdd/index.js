import React from 'react';
import './ButtonAdd.css';

const ButtonAdd = ({showFormForAddTask}) => {

  return (
    <div className="ButtonAdd btn btn-light"
         onClick={showFormForAddTask}>
      +
    </div>
  );
};

export default ButtonAdd;
