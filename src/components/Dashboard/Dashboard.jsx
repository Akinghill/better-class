import React from 'react'
import { connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

function Dashboard({profile}) {
  return (
    <div>
      <Typography variant="h1" color="initial">
        Welcome {profile.firstName}
      </Typography>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Dashboard)

