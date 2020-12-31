import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import Dashboard from '../../components/Dashboard/Dashboard'
import AuthForm from '../../components/Auth/AuthForm'

function HomePage({ auth }) {
  return (
    <>
    { auth.isEmpty ? <AuthForm/> : <Dashboard/>}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms,
    students: state.firestore.ordered.students,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['classrooms', 'students'])
)(HomePage)