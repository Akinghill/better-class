import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  dataDisplayCard: {
    margin: '1rem 0rem',
    padding: '1rem',
    width: '400px'
  },
  studentData: {
    display: "block",
    boxSizing: "border-box",
    padding: '1rem'
  }
}));

export default function StudentsList({ students }) {
  const classes = useStyles();

  return (
    <Card className={classes.dataDisplayCard}>
      <Typography variant="h4" color="initial">Students</Typography>
      {
        students && students.map((student, i) => (
          <Link
            style={i % 2 === 0 ? { "background": "#222" } : { "background": "#333" }}
            className={classes.studentData}
            to={`/student/${student.id}`}
            key={student.id}
          >
            {student.firstName + " " + student.lastName}
          </Link>
        ))
      }
    </Card>
  )
}

