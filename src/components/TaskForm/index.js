import React from 'react';
import * as moment from 'moment';
import ButtonClose from '../../components/ButtonClose';
import './newTaskForm.css';

const TaskForm = ({ addTask,
                    selectedDate,
                    closeFormForAddTask,
                    changedTask,
                    changeTask
}) => {

  let inputValue = '';
  let inputTime = '';

  const toInputDescription = (e) => {
    if(e.target.dataset.desc === 'Description')
      inputValue = e.target.value;
    if(e.target.dataset.time === 'Time')
      inputTime = e.target.value;
  };

  if(inputValue === "") inputValue = changedTask.description;
  if(inputTime === "") inputTime = changedTask.time;

  return (

    changedTask.id !== ''
      ? <form className="TaskForm">
          <div><ButtonClose closeFormForAddTask={closeFormForAddTask}/></div>
          <h3 className="text-center">Change task</h3>
          <div className="form-group">
            <label htmlFor="inputDescription">Time</label>
            <input type="time"
                   className="form-control"
                   id="inputDescription"
                   data-time="Time"
                   defaultValue={changedTask.time}
                   onChange={(e) => {toInputDescription(e)}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription">Description</label>
            <input type="text"
                   className="form-control"
                   id="inputDescription"
                   defaultValue={changedTask.description}
                   data-desc="Description"
                   onChange={(e) => {toInputDescription(e)}}
            />
          </div>
          <button type="submit"
                  onClick={(e)=>{changeTask(e,changedTask.id,inputValue, inputTime)}}
                  className="btn btn-primary">
            Change task
          </button>
      </form>
    : <form className="TaskForm">
        <div><ButtonClose closeFormForAddTask={closeFormForAddTask}/></div>
        <h3 className="text-center">New task</h3>
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
                onClick={(e)=>{addTask(e,moment(selectedDate).format('D.MM.YYYY'),{descr: inputValue, time: inputTime, completed: false})}}
                className="btn btn-primary">
          Add task
        </button>
      </form>
  );
};

export default TaskForm;
