import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { connect } from 'react-redux'
import classrooms from '../../../data/classroom';
import { createClassroom } from '../../../store/actions/classroomActions'

const useStyles = makeStyles({
  addClassForm: {
    width: "400px",
    padding: "2rem"
  },
  formHeader: {
    textAlign: "left",
    marginBottom: "1rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  formField: {
    marginBottom: "1rem"
  },
  submitBtn: {
    width: "50%"
  }
});

function AddClassForm(props) {
  const classes = useStyles();
  const [roomName, setRoomName] = useState('');
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [unitName, setUnitName] = useState('')

  return (
    <Paper className={classes.addClassForm} >
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault()
          let newClassroom = {
            "city": city,
            "state": state,
            "roomName": roomName,
            "unitName": unitName,
          }
          props.createClassroom(newClassroom)
          console.log(newClassroom)
        }}
      >
        <Typography className={classes.formHeader} variant="h4">Create New Classroom</Typography>
        <TextField
          onChange={(e) => setRoomName(e.target.value)}
          required
          className={classes.formField}
          color="secondary"
          label="Classroom Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setState(e.target.value)}
          required
          className={classes.formField}
          color="secondary"
          label="State"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setCity(e.target.value)}
          required
          className={classes.formField}
          color="secondary"
          label="City"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setUnitName(e.target.value)}
          required
          className={classes.formField}
          color="secondary"
          label="Unit Name"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitBtn}
        >
          Add Classroom
        </Button>
      </form>
    </Paper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createClassroom: (classroom) => dispatch(createClassroom(classroom))
  }
}

export default connect(null, mapDispatchToProps)(AddClassForm)
