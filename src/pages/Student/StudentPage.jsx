import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Paper } from '@material-ui/core'

import TabMenu from '../../components/TabMenu/TabMenu'


const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    padding: '0px',
    margin: "0px"
  },
  studentData: {
    padding: "2rem"
  },
  startDate: {
    color: "rgba(255,255,255, 0.6)"
  }
})

function StudentPage(props) {
  const classes = useStyles();
  const tabOptions = ["Projects", "Assessments"]
  const theme = useTheme();

  const { student } = props

  const makeDate = (timestamp) => {
    const milSeconds = timestamp * 1000
    const dateObject = new Date(milSeconds)
    return dateObject.toLocaleDateString()
  }
  console.log(student)


  return (
    <Container className={classes.pageContainer}>
      {
        student ? (
          <>
            <Paper className={classes.studentData} maxWidth="md">
              <Typography variant="h4">
                Student: {`${student.firstName} ${student.lastName}`}
              </Typography>
              <Typography variant="h5" className={classes.startDate}>
                Start Date: {`${makeDate(student.startDate.seconds)}`}
              </Typography>
              <Typography variant="h5" style={{color:theme.palette.secondary.light}}>
                Enrolled
              </Typography>
            </Paper>
            {/* <Container maxWidth="md">
            <div style={{ "margin": "auto" }}>
              <TabMenu
                tabOptions={tabOptions}
              />
            </div>
          </Container> */}
          </>
        ) : (<div>Loading...</div>)
      }

    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.studentId;
  const students = state.firestore.data.students
  const student = students ? students[id] : null
  return {
    student: student
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['students'])
)(StudentPage)