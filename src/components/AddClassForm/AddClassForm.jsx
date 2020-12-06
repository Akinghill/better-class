import React from 'react'
import { Button, Paper, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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

export default function AddClassForm() {
  const classes = useStyles();

  return (
    <Paper className={classes.addClassForm} >
      <form className={classes.form}>
        <Typography className={classes.formHeader} variant="h4">Create New Classroom</Typography>
        <TextField required className={classes.formField} color="secondary" label="Classroom Name" variant="outlined"></TextField>
        <TextField required className={classes.formField} color="secondary" label="State" variant="outlined"></TextField>
        <TextField required className={classes.formField} color="secondary" label="City" variant="outlined"></TextField>
        <TextField required className={classes.formField} color="secondary" label="Unit Name" variant="outlined"></TextField>
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
