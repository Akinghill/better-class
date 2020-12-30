export const createClassroom = (classroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore.collection('classrooms').add({
      ...classroom
    }).then(()=>{
      dispatch({ type: 'CREATE_CLASSROOM', classroom });
    }).catch((err)=> {
      dispatch({ type: "CREATE_CLASSROOM_ERROR", err})
    })
  }
}

export const createStudent = (student) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore.collection('students').add({
      ...student
    }).then(()=>{
      dispatch({ type: 'CREATE_STUDENT', student });
    }).catch((err)=> {
      dispatch({ type: "CREATE_STUDENT_ERROR", err})
    })
  }
}
