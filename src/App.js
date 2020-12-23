import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import ClassroomPage from './pages/Classroom/ClassroomPage';
import StudentPage from './pages/Student/StudentPage';
import InstructorPage from './pages/Instructor/InstructorPage';
import MainLayout from './components/Layout/MainLayout';
import SignInForm from './components/SignIn/SignInForm';
import AddClassForm from './components/AddClassForm/AddClassForm';

import theme from './theme'
import HomePage from './pages/Home/HomePage';

class App extends React.Component {

  render() {
    return (
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/classroom/:classroomId' component={ClassroomPage} />
              <Route exact path='/students/:studentid' component={StudentPage} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
    );
  }

}

export default App