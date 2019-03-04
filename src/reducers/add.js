const add = (state = false, action) => {
  switch (action.type) {

    case 'WANT_TO_ADD_TASK':
      return action.payload;

    case 'CHANGE_ADD_TASK':
      return action.payload;

    default:
      return state
  }
};

export default add
