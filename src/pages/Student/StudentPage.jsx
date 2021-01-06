import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core'

import TabMenu from '../../components/TabMenu/TabMenu'


const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 2rem"
  }
})

function StudentPage(props) {
  const classes = useStyles();
  const tabOptions = ["Projects", "Assessments"]
  const { student } = props
  console.log(student)


  return (
    <Container className={classes.pageContainer}>
      {
        student ? (
        <>
          <Container className={classes.classPanel} maxWidth="md">
            <Typography variant="h3">
              {`${student.firstName} ${student.lastName}`}
            </Typography>
          </Container>
          <Container maxWidth="md">
            <div style={{ "margin": "auto" }}>
              <TabMenu
                tabOptions={tabOptions}
              />
            </div>
          </Container>
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