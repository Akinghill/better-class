import React from 'react';
import { AppBar, Tabs, Tab, makeStyles, Typography, Box } from '@material-ui/core';

import SignInForm from './SignInForm'

const useStyles = makeStyles({
  form: {
    "maxWidth": "500px",
    margin: "auto",
  }
});


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SignIn = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" className={classes.form}>
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignInForm/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignInForm formType="register"/>
      </TabPanel>
    </>
  );
};

export default SignIn;
