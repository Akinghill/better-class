import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect} from 'react-redux-firebase'
import ClassroomsList from '../../components/ClassroomsList/ClassroomsList'

function HomePage(props) {
  return (
    <>
      <ClassroomsList classrooms={props.classrooms}></ClassroomsList>
    </>
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