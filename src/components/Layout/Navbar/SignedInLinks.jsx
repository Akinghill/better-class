import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

import Button from '@material-ui/core/Button'

function SignedInLinks(props) {

  return (
    <>
      <Button 
      onClick={props.signOut}
      variant="text" 
      color="default"
      >
        Sign Out
      </Button>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
