import React from 'react';
import * as moment from 'moment';
import TaskForm from '../../components/TaskForm';
import TaskView from '../../components/TaskView';
import ButtonAdd from "../../components/ButtonAdd";
import './TasksContainer.css';

const TasksContainer = ({ isAddTask,
                          selectedDate,
                          addTask,
                          tasks,
                          deleteTask,
                          showFormForAddTask,
                          closeFormForAddTask,
                          changeTask,
                          changedTask,
                          changeCompleted
}) => {

  const dayTasks = tasks.filter((task) =>
    Object.keys(task)[0] === moment(selectedDate).format('D.MM.YYYY')
  )[0];

  let key;

  if(dayTasks) {
    key = Object.keys(dayTasks)[0];
  }

  return (
    <div className="TasksContainer">
      {isAddTask
        ? <TaskForm selectedDate={selectedDate}
                    addTask={addTask}
                    closeFormForAddTask={closeFormForAddTask}
                    changedTask={changedTask}
                    changeTask={changeTask}
        />
        : dayTasks
          ? <>
              {dayTasks[key].map((description, i) =>
                <TaskView key={i}
                          description={description}
                          deleteTask={deleteTask}
                          selectedDate={selectedDate}
                          changeTask={changeTask}
                          changeCompleted={changeCompleted}
                />
              )}
              <ButtonAdd showFormForAddTask={showFormForAddTask}/>
            </>
          : <ButtonAdd showFormForAddTask={showFormForAddTask}/>
      }
    </div>
  );
};

export default TasksContainer;
