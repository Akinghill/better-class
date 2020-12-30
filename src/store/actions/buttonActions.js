export const toggleDrawer = () => {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  }
}

export const openStudentForm = () => {
  return (dispatch) => {
    dispatch({ type: "OPEN_STUDENT_FORM" })
  }
}

export const openClassroomForm = () => {
  return (dispatch) => {
    dispatch({ type: "OPEN_CLASSROOM_FORM" })
  }
}

export const closeModal = () => {
  return (dispatch) => {
    dispatch({ type: "CLOSE_MODAL" })
  }
}