import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, TextField, Typography } from '@material-ui/core'

import { signIn } from '../../store/actions/authActions'
import { classnames } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    padding: "1rem 2rem",
    margin: "auto",
    marginTop: "3rem",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0px)"
  },
  formHeader: {
    textAlign: "left",
    marginBottom: "1rem",
    cursor: 'pointer'
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  formField: {
    marginBottom: "1rem"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  formTitle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  active: {
    cursor: "default",
    color: theme.palette.primary.light,
    "&::after": {
      content: '""',
      display: "block",
      height: '3px',
      width: "100%",
      background: theme.palette.primary.light
    }
  }
}));


function AuthForm(props) {
  const classes = useStyles();
  const [showSignUp, setShowSignUp] = React.useState(false)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (showSignUp) {
      props.signUp({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
    } else {
      props.signIn({
        email: email,
        password: password
      })
    }
  }

  const handleClick = (e) => {
    setShowSignUp(!showSignUp)
  }

  return (
    <Card elevation={3} className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formTitle}>
          <Typography onClick={showSignUp ? handleClick : null} className={`${classes.formHeader} ${!showSignUp ? classes.active : null}`} variant="h4">Sign In</Typography>
          <Typography onClick={!showSignUp ? handleClick : null} className={`${classes.formHeader} ${showSignUp ? classes.active : null}`} variant="h4">Sign Up</Typography>
        </div>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          required
          className={classes.formField}
          color="secondary"
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          className={classes.formField}
          color="secondary"
          label="Password"
          variant="outlined"
        />
        {showSignUp &&
          <>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={classes.formField}
              color="secondary"
              label="First Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              required
              className={classes.formField}
              color="secondary"
              label="Last Name"
              variant="outlined"
            />
          </>
        }
        <Button
          type='submit'
          variant="contained"
          color="primary"
          className={classes.submitBtn}
        >
          {
            showSignUp ? "Sign Up" : "Sign In"
          }
        </Button>
      </form>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)