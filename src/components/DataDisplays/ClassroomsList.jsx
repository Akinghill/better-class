import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Typography, Card } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  dataDisplayCard: {
    margin: '1rem 0rem',
    padding: '1rem',
    width: '400px'
  },
  classroomData: {
    display: "block",
    boxSizing: "border-box",
    padding: '1rem'
  }
}));

export default function ClassroomsList({ classrooms }) {
  const classes = useStyles();

  return (
    <Card className={classes.dataDisplayCard} variant="outlined">
      <Typography variant="h4" color="initial">Classrooms</Typography>

      {
        classrooms && classrooms.map((classroom, i) => (
          <Link
            style={i % 2 === 0 ? { "background": "#222" } : { "background": "#333" }}
            className={classes.classroomData}
            to={`/classroom/${classroom.id}`}
            key={classroom.id}
          >
            {classroom.roomName}
          </Link>
        ))
      }
    </Card>
  )
}

