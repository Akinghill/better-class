import { TrendingUpTwoTone } from "@material-ui/icons";

const initState = {
  drawerOpen: false, 
  modals: {
    showAddStudent: false,
    showAddClassroom: false
  }
}

const buttonReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    case "OPEN_CLASSROOM_FORM":
      return {
        ...state,
        modals: {
          ...state.modals,
          showAddClassroom: TrendingUpTwoTone
        }
      }
    case "OPEN_STUDENT_FORM":
      console.log('open student form')
      return {
        ...state,
        modals: {
          ...state.modals,
          showAddStudent: true
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

export default buttonReducer;