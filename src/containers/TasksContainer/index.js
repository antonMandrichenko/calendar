import React from 'react';
import TaskForm from '../../components/newTaskForm';
import TaskView from '../../components/TaskView';
import ButtonAdd from "../../components/ButtonAdd";
import './TasksContainer.css';

const TasksContainer = ({ date,
                          toAddTask,
                          tasks,
                          wantToAddTask,
                          deleteTask,
                          showFormForAddTask,
                          closeFormForAddTask
}) => {
  return (
    <div className="TasksContainer alert alert-secondary col-md-6">
      <h3 className="text-center">{date}</h3>
      {wantToAddTask
        ? <TaskForm toAddTask={toAddTask} closeFormForAddTask={closeFormForAddTask}/>
        : tasks.filter((task) =>
          task.time === date).length !== 0
            ? tasks.filter((task) =>
              task.time === date
              ).map((task) =>
                task.data.map((item, i) =>
                  <TaskView key={i}
                            item={item}
                            deleteTask={deleteTask}
                            date={date}
                  />
                )
              )
              : null
      }
      {wantToAddTask
        ? null
        : <div className="row alert alert-success">
            <div className="col-11">Add task for this day</div>
            <div className="col-1">
              <ButtonAdd showFormForAddTask={showFormForAddTask}/>
            </div>
          </div>
      }
    </div>
  );
};

export default TasksContainer;
