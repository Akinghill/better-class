import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 400,
    padding: "1rem 2rem",
    margin: "auto"
  },
  pageContainer: {
    display: "flex",
    justifyContent: "center"
  },
  formHeader: {
    textAlign: "left",
    marginBottom: "1rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  formField: {
    marginBottom: "1rem"
  }
});


export default function SignInForm({ formType }) {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!frontEndValidation()) { return }
    console.log(email, password)
  }

  const frontEndValidation = () => {
    if (email.split('@')[1].toLowerCase() !== 'perseverenow.org') {
      alert("Enter persevere email")
      return false
    }
    if (password !== passwordConfirm) {
      alert("Passwords must match")
      return false
    }
    return true
  }

  return (
    <Card elevation={3} className={classes.root}>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <TextField
          onChange={(event) => setName(event.target.value)}
          className={classes.formField}
          value={name}
          id="name"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          className={classes.formField}
          value={email}
          id="email"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          className={classes.formField}
          value={password}
          id="password"
          label="Password"
          variant="outlined"
          required
        />
        {
          formType === "register" &&
          <TextField
            onChange={(event) => setPasswordConfirm(event.target.value)}
            value={passwordConfirm}
            className={classes.formField}
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            required
          />
        }
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}
