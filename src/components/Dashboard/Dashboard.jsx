import React from 'react'
import { connect } from 'react-redux'
import { Typography, Box } from '@material-ui/core'
import theme from '../../theme'

import AddClassForm from '../Forms/AddClassForm'
import AddStudentForm from '../Forms/AddStudentForm'
import ClassroomsList from '../DataDisplays/ClassroomsList'
import StudentsList from '../DataDisplays/StudentsList'

function Dashboard(props) {
  console.log(props)
  const { profile, classrooms, students } = props
  const showAddClassroomForm = props.showAddClassroom
  const showAddStudentForm = props.showAddStudent

  return (
    <div>
      <Typography variant='h3'>
        Welcome {profile.firstName}
      </Typography>
      {
        showAddClassroomForm ? <AddClassForm /> : showAddStudentForm ? <AddStudentForm /> : null
      }
      <ClassroomsList classrooms={classrooms}></ClassroomsList>
      <StudentsList students={students}></StudentsList>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms,
    students: state.firestore.ordered.students,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    showAddClassroom: state.buttons.modals.showAddClassroom,
    showAddStudent: state.buttons.modals.showAddStudent
  }
}

export default connect(mapStateToProps)(Dashboard)

