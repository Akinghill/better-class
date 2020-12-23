
const initState = {
  students: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
}

const classroomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CLASSROOM':
      console.log('create classroom', action.classroom);
      return state;
    case "CREATE_CLASSROOM_ERROR":
      console.log('create classroom error', action.err)
      return state;
    default:
      return state;
  }
};

export default classroomReducer;