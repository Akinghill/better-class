import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  panelContainer: {
    background: "#1a1919",
  }
})

export default function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper className={classes.panelContainer} p={3}>
          {children}
        </Paper>
      )}
    </div>
  )
}
