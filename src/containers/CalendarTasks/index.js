import React, {useState} from 'react';
import * as moment from 'moment';
import DatesContainer from "../DatesContainer";
import TasksContainer from "../TasksContainer";
import WeekContainer from "../WeekContainer";
import Header from "../Header";
import './CalendarTasks.css';

const CalendarAndTasks = () => {

  const [tasks, setTasks] = useState([]);
  const [datesSet, setDatesSet] = useState(new Set());
  const [selectedDate, setSelectedDate] = useState(moment());
  const [id, setId] = useState(0);
  const [isAddTask, setIsAddTask] = useState(false);
  const [changedTask, setChangedTask] = useState({id: '', description: '', time: ''});

  const addTask = (e, date, {descr, time, completed}) => {
    e.preventDefault();
    if(!descr && !time) {
      alert('Enter description and time');
      return;
    }
    if (!descr) {
      alert('Enter description');
      return;
    }
    if (!time) {
      alert('Enter time');
      return;
    }
    setTasks(datesSet.has(date)
      ? tasks.map((task) => {
        const key = Object.keys(task)[0];
        return key === date ? { [date]: task[key].concat({descr, time, id: id, completed}) }: task })
      : [...tasks, {[date]: [{descr, time, id: id, completed}]}]
    );
    setDatesSet(datesSet.add(date));
    setId(id + 1);
    setIsAddTask(false);
  };

  const deleteTask = (id, date) => {
    setTasks(tasks.map((item) => {
        const key = Object.keys(item)[0];
        return key === date
          ? {[key]: item[key].filter((value) => value.id !== id)}
          : item
      })
    );
  };

  const changeDate = (e) => {
    if(e.target.className === 'DayView DayView__active' || e.target.className === 'DayView DayView__noactive') {
      setSelectedDate(moment(e.target.dataset.date, 'D.MM.YYYY'));
    }
    if(e.target.className === 'fa fa-angle-left')
      setSelectedDate(moment(selectedDate).subtract(1, 'month'));
    if(e.target.className === 'fa fa-angle-right')
      setSelectedDate(moment(selectedDate).add(1, 'month'));
  };

  const changeTask = (e, id, descr, time) => {
    e.preventDefault();
    setIsAddTask(true);
    setChangedTask({id, description: descr, time});
    if(e.target.innerHTML === "Change task") {
      setTasks(tasks.map((item) => {
          const key = Object.keys(item)[0];
          return key === moment(selectedDate).format('D.MM.YYYY')
            ? {[key]: item[key].map((value) => value.id === id
                ? {id, descr, time}
                : value
              )}
            : item
        })
      );
      setIsAddTask(false);
      setChangedTask({id: '', description: '', time: ''})
    }
  };

  const changeCompleted = (id, date, completed) => {
    setTasks(tasks.map((item) => {
        const key = Object.keys(item)[0];
        return key === date
          ? {[key]: item[key].map((value) => value.id === id
              ? {...value, completed: !completed}
              : value
            )}
          : item
      })
    );
  };

  const showFormForAddTask = () => {
    setIsAddTask(true);
  };

  const closeFormForAddTask = () => {
    setIsAddTask(false);
  };

  return (
    <div className="CalendarAndTasks">
      <Header selectedDate={selectedDate}
              toSelectedDate={changeDate}

      />
      <WeekContainer/>
      <DatesContainer selectedDate={selectedDate}
                      toSelectedDate={changeDate}
                      tasks = {tasks}
      />
      <TasksContainer
                      isAddTask={isAddTask}
                      selectedDate={selectedDate}
                      addTask={addTask}
                      tasks = {tasks}
                      changeTask={changeTask}
                      deleteTask={deleteTask}
                      showFormForAddTask={showFormForAddTask}
                      closeFormForAddTask={closeFormForAddTask}
                      changedTask={changedTask}
                      changeCompleted={changeCompleted}
      />
     </div>
  );
};

export default CalendarAndTasks;
