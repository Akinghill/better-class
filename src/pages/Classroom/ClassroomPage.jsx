import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

function ClassroomPage(props) {
  const id = props.match.params.classroomId
  console.log(id)
  console.log(props)
  return (
    <div>
      <h1>
        Classroom Page
      </h1>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.classroomId;
  const classrooms = state.firestore.data.classrooms
  const classroom = classrooms ? classrooms[id] : null
  return {
    classroom: classroom
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['classrooms'])
)(ClassroomPage)