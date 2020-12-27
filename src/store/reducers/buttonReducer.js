const initState = {
  drawerOpen: false, 
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      console.log('TOGGLEDRAWER')
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    case "CLOSE_DRAWER":
      console.log('CLOSE DRAWER')
      return {
        ...state,
        drawerOpen: false
      }
    default:
      return state
  }
};

export default authReducer;