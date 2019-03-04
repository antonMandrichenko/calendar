import * as moment from 'moment';

const initialState = {
  selectedDate: moment().format('D.MM.YYYY'),
  selectedYear: '',
  selectedMonth: '',
  today: moment().format('D.MM.YYYY')
};

const date = (state = initialState, action) => {
  switch (action.type) {

    case 'SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.date,
        today: moment().format('D.MM.YYYY')
      };

    case 'SELECTED_MONTH':
      return {
        ...state,
        selectedMonth: moment(action.date, 'D.MM.YYYY').get('month'),
        today: moment().format('D.MM.YYYY')
      };

    case 'DONT_SELECTED_MONTH':
      return {
        ...state,
        selectedMonth: action.payload,
        today: moment().format('D.MM.YYYY')
      };

    default:
      return state
  }
};

export default date
