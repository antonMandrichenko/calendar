let nextTaskId = 0;
export const addTask = (description, date, beginTime) => ({
  type: 'ADD_TASK',
  date,
  id: nextTaskId++,
  description,
  beginTime
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id
});

export const wantToAddTask = () => ({
  type: 'WANT_TO_ADD_TASK',
  payload: true
});

export const changeAddTask = () => ({
  type: 'CHANGE_ADD_TASK',
  payload: false
});

export const selectedDate = (date) => ({
  type: 'SELECTED_DATE',
  date
});

export const selectedMonth = (date) => ({
  type: 'SELECTED_MONTH',
  date
});

export const dontSelectedMonth = () => ({
  type: 'DONT_SELECTED_MONTH',
  payload: ''
});

