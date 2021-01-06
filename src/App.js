import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import ClassroomPage from './pages/Classroom/ClassroomPage';
import StudentPage from './pages/Student/StudentPage';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/Home/HomePage';

import theme from './theme'

class App extends React.Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/classroom/:classroomId' component={ClassroomPage} />
              <Route exact path='/student/:studentId' component={StudentPage} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
    );
  }
}

export default App