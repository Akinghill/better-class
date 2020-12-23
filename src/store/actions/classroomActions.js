export const createClassroom = (classroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
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