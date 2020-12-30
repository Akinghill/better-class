export const toggleDrawer = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_DRAWER'});
  }
}

export const toggleStudentForm = () => {
  return (dispatch) => {
    dispatch({type: "TOGGLE_STUDENT_FORM"})
  }
}

export const closeModal = () => {
  return (dispatch) => {
    dispatch({type: "CLOSE_MODAL"})
  }
}