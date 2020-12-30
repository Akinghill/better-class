import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'

import AddClassForm from '../Forms/AddClassForm'
import AddStudentForm from '../Forms/AddStudentForm'

function Dashboard(props) {
  const { profile } = props
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    showAddClassroom: state.buttons.modals.showAddClassroom,
    showAddStudent: state.buttons.modals.showAddStudent
  }
}

export default connect(mapStateToProps)(Dashboard)

