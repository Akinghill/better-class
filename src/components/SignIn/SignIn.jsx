import React from 'react';
import { AppBar, Tabs, Tab, makeStyles, Typography, Button, Box } from '@material-ui/core';

import SignInForm from './SignInForm'
import { signInWithGoogle } from '../../firebase/firebase.utils'


const useStyles = makeStyles({
  form: {
    "maxWidth": "500px",
    margin: "auto",
  }
});


const SignIn = (props) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
  };

  return (
    <>

    </>
  );
};

export default SignIn;
