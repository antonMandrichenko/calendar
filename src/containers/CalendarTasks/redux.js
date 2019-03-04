import {
  addTask,
  selectedDate,
  wantToAddTask,
  changeAddTask,
  deleteTask,
  selectedMonth,
  dontSelectedMonth
} from '../../actions';

export const mapStateToProps = (state) => ({
  date: state.date.selectedDate,
  tasks: state.tasks,
  wantToAddTask: state.add,
  selectedMonth: state.date.selectedMonth
});

export const mapDispatchToProps = (dispatch) => ({
  toAddTask: (description, date, beginTime) => dispatch(addTask(description, date, beginTime)),
  toSelectedDate: (date) => dispatch(selectedDate(date)),
  toWantAddTask: () => dispatch(wantToAddTask()),
  changeAdd: () => dispatch(changeAddTask()),
  deleteTask: (id) => dispatch(deleteTask(id)),
  toSelectedMonth: (date) => dispatch(selectedMonth(date)),
  dontSelectedMonth: () => dispatch(dontSelectedMonth())
});

