export const toggleDrawer = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_DRAWER'});
  }
}