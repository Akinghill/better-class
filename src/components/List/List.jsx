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
      {/* Define List Columns */}
      <Typography variant="h4"></Typography>

      {
        listItems.listItems.map((item, i) => (
          <Link style={{ "textDecoration": "none" }} to={`/classrooms/${item.roomName}`}>
            <Typography className={classes.link} color="primary" variant="h5">
              {
                listItems.listItems.map(item => item)
              }
            </Typography>
          </Link>
        ))
      }
    </div>
  )
}
