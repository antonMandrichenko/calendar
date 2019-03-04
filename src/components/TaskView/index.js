import React from 'react';
import ButtonDelete from "../ButtonDelete";

const TaskView = ({item, deleteTask, date}) => {

  return (
    <div className="row alert alert-primary">
      <div className="col-lg-2">
        {item.beginTime}
      </div>
      <div className="col-lg-9">
        {item.description}
      </div>
      <div className="col-lg-1">
        <ButtonDelete deleteTask={deleteTask}
                id={item.id}
                date={date}
        />
      </div>
    </div>
  );
};

export default TaskView;
