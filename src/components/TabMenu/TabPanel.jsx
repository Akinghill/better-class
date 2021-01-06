import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

import EnhancedTable from '../Table/EnhancedTable'


// Mock Data
import students from '../../data/student'
import classrooms from '../../data/classroom'

const useStyles = makeStyles({
  panelContainer: {
    background: "#1a1919",
  }
})

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, option, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper className={classes.panelContainer} p={3} square={false}>
          {/* {option.toLowerCase() === "students" && <EnhancedTable rows={students.rows} columns={students.columns} option={option}></EnhancedTable>} */}
          {/* {option.toLowerCase() === "classrooms" && <EnhancedTable rows={classrooms.rows} columns={classrooms.columns} option={option}></EnhancedTable>} */}
        </Paper>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    classrooms: state.firestore.ordered.classrooms
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(()=>['classrooms'])
)(TabPanel)
