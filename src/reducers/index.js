import { combineReducers } from 'redux';
import tasks from "./tasks";
import date from './date';
import add from './add';

export default combineReducers({
  tasks,
  date,
  add
})
