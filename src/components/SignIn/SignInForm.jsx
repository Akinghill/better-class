import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, TextField, Typography } from '@material-ui/core'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.split('@')[1].toLowerCase() !== 'perseverenow.org') {
      alert("Enter persevere email")
    }
    console.log(email, password)
  }

  return (
    <Card elevation={3} className={classes.root}>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
      >
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
          formType === "register" && <TextField className={classes.formField} id="confirmPassword" label="Confirm Password" variant="outlined" required />
        }
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}
