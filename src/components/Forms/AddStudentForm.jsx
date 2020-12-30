import React, { useState } from 'react'
import { Button, Dialog, Paper, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { connect } from 'react-redux'
import { createStudent } from '../../store/actions/formActions'
import { closeModal } from '../../store/actions/buttonActions'

const useStyles = makeStyles({
  addStudentForm: {
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

function AddStudentForm(props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [docNum, setDocNum] = useState('');
  const [startDate, setStartDate] = useState('')

  return (
    <Dialog open onClose={props.closeModal}>
      <Paper className={classes.addStudentForm} >
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault()
            let newStudent = {
              "firstName": firstName,
              "lastName": lastName,
              "docNum": docNum,
              "startDate": startDate,
            }
            props.createStudent(newStudent)
            props.closeModal()
            console.log("trying to create student", newStudent)
          }}
        >
          <Typography className={classes.formHeader} variant="h4">Add New Student</Typography>
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={classes.formField}
            color="secondary"
            label="First Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            required
            className={classes.formField}
            color="secondary"
            label="Last name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setDocNum(e.target.value)}
            required
            className={classes.formField}
            color="secondary"
            label="DOC Number"
            variant="outlined"
          />
          <TextField
            id="date"
            onChange={(e) => setStartDate(e.target.value)}
            className={classes.formField}
            variant="outlined"
            label="Start Date"
            type="date"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submitBtn}
          >
            Add Student
        </Button>
        </form>
      </Paper>
    </Dialog>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student) => dispatch(createStudent(student)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mapDispatchToProps)(AddStudentForm)
