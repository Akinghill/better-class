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

  return (
    <Card elevation={3} className={classes.root}>
        <Button variant="contained">
        </Button>
    </Card>
  )
}
