import React from 'react';
import './ButtonDelete.css';

const ButtonDelete = ({deleteTask, id}) => {

  return (
    <div className="ButtonDelete btn btn-light"
         onClick={()=>{deleteTask(id)}}>
      X
    </div>
  );
};

export default ButtonDelete;
