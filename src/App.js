import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles} from '@material-ui/core/styles'

import InstructorPage from './pages/Instructors/InstructorPage';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUpPage';
import ClassroomPage from './pages/Classrooms/ClassroomPage';
import { Paper } from '@material-ui/core';
import theme from './theme'
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
  app: {
    minHeight: "100vh"
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.app} square>
        <Switch>
          <Route exact path='/signin' component={SignInSignUpPage}/>
          <Route exact path='/' component={InstructorPage}/>
          <Route exact path='/classrooms/:classroomName' component={ClassroomPage}/>
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
