import React from 'react';
import * as moment from 'moment';
import ButtonTaskCompleted from "../ButtonTaskCompleted";
import './TaskView.css';

const TaskView = ({ description,
                    deleteTask,
                    selectedDate,
                    changeTask,
                    changeCompleted
}) => {

  const date = moment(selectedDate).format('D.MM.YYYY');

  return (
    <div className={"TaskView"}>
      <div className={"TaskView__task"}>
        <div className={"TaskView__time"}>{description.time}</div>
        <div className={!description.completed ? "TaskView__title" : "TaskView__title_completed"}>{description.descr}</div>
      </div>
      <div className={"TaskView__icons"}>
        <div className={"TaskView__change"} onClick={(e)=>{changeTask(e, description.id, description.descr,  description.time)}}><i className="fas fa-pen"></i></div>
        <ButtonTaskCompleted completed={description.completed}
                             id={description.id}
                             date={date}
                             changeCompleted={changeCompleted}
        />
        <div className={"TaskView__delete"} onClick={()=>{deleteTask(description.id, date)}}><i className="fas fa-trash-alt"></i></div>
      </div>
    </div>
  );
};

export default TaskView;
