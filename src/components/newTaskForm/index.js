import React from 'react';
import ButtonClose from '../../components/ButtonClose';
import './newTaskForm.css';

const TaskForm = ({toAddTask, closeFormForAddTask}) => {

  let inputValue = '';
  let inputTime = '';

  const toInputDescription = (e) => {
    if(e.target.dataset.desc === 'Description')
      inputValue = e.target.value;
    if(e.target.dataset.time === 'Time')
      inputTime = e.target.value;
  };

  return (
    <form className="TaskForm">
      <div><ButtonClose closeFormForAddTask={closeFormForAddTask}/></div>
      <h2 className="text-center">New task</h2>
      <div className="form-group">
        <label htmlFor="inputDescription">Time</label>
        <input type="time"
               className="form-control"
               id="inputDescription"
               placeholder="Time"
               data-time="Time"
               onChange={(e) => {toInputDescription(e)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="inputDescription">Description</label>
        <input type="text"
               className="form-control"
               id="inputDescription"
               placeholder="Description"
               data-desc="Description"
               onChange={(e) => {toInputDescription(e)}}/>
      </div>
      <button type="submit"
              onClick={(e)=>{toAddTask(e,inputValue, inputTime)}}
              className="btn btn-primary">
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
