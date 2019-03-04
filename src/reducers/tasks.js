const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          time: action.date,
          data:[{
            id: action.id,
            beginTime: action.beginTime,
            description: action.description,
            completed: false}
          ]
        }
      ];

    case 'DELETE_TASK':
      return state.filter((item) =>
       item.data[0].id !== action.id
      );

    default:
      return state
  }
};
export default tasks
