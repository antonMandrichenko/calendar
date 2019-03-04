import React from 'react';
import * as moment from 'moment';
import { connect } from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import DatesContainer from "../DatesContainer";
import TasksContainer from "../TasksContainer";

const CalendarAndTasks = ({ date,
                            toSelectedDate,
                            tasks,
                            toAddTask,
                            toWantAddTask,
                            wantToAddTask,
                            changeAdd,
                            deleteTask,
                            toSelectedMonth,
                            selectedMonth,
                            dontSelectedMonth
}) => {

  const changeDate = (e) => {
    if(e.target.className === 'DayView alert alert-light' || e.target.className === 'DayView alert alert-dark') {
      toSelectedDate(e.target.dataset.date);
    }
    if(e.target.className === 'fas fa-angle-left') {
      if(selectedMonth === '') {
        toSelectedDate(moment(date, 'D.MM.YYYY').subtract(1, 'day').format('D.MM.YYYY'))
      } else {
        toSelectedDate(moment(date, 'D.MM.YYYY').subtract(1, 'month').format('D.MM.YYYY'));
        toSelectedMonth(moment(date, 'D.MM.YYYY').subtract(1, 'month').format('D.MM.YYYY'));
      }
    }
    if(e.target.className === 'fas fa-angle-right') {
      if(selectedMonth === '') {
        toSelectedDate(moment(date, 'D.MM.YYYY').add(1, 'day').format('D.MM.YYYY'));
      } else {
        toSelectedDate(moment(date, 'D.MM.YYYY').add(1, 'month').format('D.MM.YYYY'));
        toSelectedMonth(moment(date, 'D.MM.YYYY').add(1, 'month').format('D.MM.YYYY'));
      }
    }
    if(e.target.className === 'DayView alert alert-warning') {
      toWantAddTask();
    }
  };

  const addTask = (e, description, beginTime) => {
    e.preventDefault();
    if(!description && !beginTime) {
      alert('Enter description and time');
      return;
    }
    if (!description) {
      alert('Enter description');
      return;
    }
    if (!beginTime) {
      alert('Enter time');
      return;
    }
    toAddTask(description, date, beginTime);
    changeAdd();
  };

  const toDeleteTask = (id) => {
    deleteTask(id);
  };

  const showFormForAddTask = () => {
    toWantAddTask();
  };

  const closeFormForAddTask = () => {
    changeAdd();
  };

  const toSelectMonth = (date) => {
    selectedMonth !== ''
      ? dontSelectedMonth()
      : toSelectedMonth(date);
  };

  return (
    <div className="CalendarAndTasks">
      <DatesContainer date={date}
                      toSelectedDate={changeDate}
                      toAddTask={addTask}
                      tasks = {tasks}
                      toSelectMonth={toSelectMonth}
                      selectedMonth={selectedMonth}
      />
      <TasksContainer date={date}
                      toAddTask={addTask}
                      tasks = {tasks}
                      wantToAddTask={wantToAddTask}
                      deleteTask={toDeleteTask}
                      showFormForAddTask={showFormForAddTask}
                      closeFormForAddTask={closeFormForAddTask}
      />
     </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CalendarAndTasks)
