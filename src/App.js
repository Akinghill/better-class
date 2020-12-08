import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import InstructorPage from './pages/Instructors/InstructorPage';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUpPage';
import ClassroomPage from './pages/Classrooms/ClassroomPage';
import StudentPage from './pages/Student/StudentPage';
import MainLayout from './components/Layout/MainLayout';

import theme from './theme'

const useStyles = makeStyles({
  app: {
    minHeight: "100vh"
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Paper className={classes.app} square>
          <Switch>
            <Route exact path='/better-class/signin' component={SignInSignUpPage} />
            <Route exact path='/better-class/' component={InstructorPage} />
            <Route exact path='/better-class/classrooms/:classroomName' component={ClassroomPage} />
            <Route exact path='/better-class/students/:studentid' component={StudentPage} />
          </Switch>
        </Paper>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
