import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import SignInForm from '../../components/SignInForm/SignInForm'

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function SignInSignUpPage() {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <SignInForm formType="signin"/>
    </div>

  )
}
