import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'

import AddClassForm from '../Forms/AddClassForm'

function Dashboard(props) {
  const { profile } = props
  const showForm = props.showAddClassroom

  return (
    <div>
      <Typography variant='h3'>
        Welcome {profile.firstName}
      </Typography>
      {
        showForm && <AddClassForm />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    showAddClassroom: state.buttons.modals.showAddClassroom
  }
}

export default connect(mapStateToProps)(Dashboard)

