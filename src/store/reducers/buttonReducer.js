const initState = {
  drawerOpen: false, 
  modals: {
    showAddStudent: false,
    showAddClassroom: false
  }
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    case "TOGGLE_STUDENT_FORM":
      return {
        ...state,
        modals: {
          ...state.modals,
          showAddClassroom: !state.modals.showAddClassroom
        }
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        modals: {
          ...initState.modals
        }
      }
    default:
      return state
  }
};

export default authReducer;