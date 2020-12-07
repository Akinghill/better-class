import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  link: {
    padding: "1rem",
    '&:hover': {
      background: "rgba(0,0,0,0.3)",
    }
  }
});

export default function List({ listItems }) {
  const classes = useStyles();

  return (
    <div>
      {
        listItems.map(item => (
          <Link  style={{ "textDecoration": "none" }} to={`/classrooms/${item.roomName}`}>
            <Typography className={classes.link} color="primary" variant="h4">{item.state}, {item.roomName}</Typography>
          </Link>
        ))
      }
    </div>
  )
}
