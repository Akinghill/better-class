import React from 'react'
import { connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'

function Dashboard({profile, theme}) {
  return (
    <div>
      <Typography variant='h3'>
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

