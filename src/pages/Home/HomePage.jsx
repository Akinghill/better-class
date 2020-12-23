import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect} from 'react-redux-firebase'

function HomePage(props) {
  console.log(props)
  return (
    <div>
      {
        props.classrooms.map((classroom) => (
          <div key={classroom.id}>
            <h1>{classroom.roomName}</h1>
          </div>
        ))
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(()=>['classrooms'])
)(HomePage)