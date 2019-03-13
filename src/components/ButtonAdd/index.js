import React from 'react';
import './ButtonAdd.css';

const ButtonAdd = ({showFormForAddTask}) => {

  return (
    <div className={"ButtonAdd"} onClick={showFormForAddTask}>
      Add task (event)
      <div className={"ButtonAdd__icon"}><i className="far fa-calendar-plus"></i></div>
      </div>
  );
};

export default ButtonAdd;
