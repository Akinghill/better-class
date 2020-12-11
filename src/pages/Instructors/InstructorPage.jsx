import React, { useState } from 'react'
import { Button, Container, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import AddClassForm from '../../components/AddClassForm/AddClassForm'
import TabMenu from '../../components/TabMenu/TabMenu'
import Navbar from '../../components/Navbar/Navbar';
import SignInForm from '../../components/SignIn/SignIn'

const useStyles = makeStyles({
  instructorPage: {
    display: "flex",
    padding: "2rem 2rem"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0"
  },
  instructorBtns: {
    width: "33%",
    marginBottom: "1rem"
  }
});

export default function InstructorPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const tabOptions = ["Classrooms", "Contact Info", "Students", "Other"]

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className={classes.instructorPage}>
        <Container maxWidth="md">
          <Typography variant="h3">
            Hello Instructor
          </Typography>
          <Container className={classes.buttonContainer} >
            <Button
              className={classes.instructorBtns}
              color="primary"
              variant="contained"
              onClick={handleOpen}
            >
              Add Classroom
          </Button>
            <Button
              className={classes.instructorBtns}
              color="primary"
              variant="contained"
            >
              Add Student
          </Button>
            <Button
              className={classes.instructorBtns}
              color="primary"
              variant="contained"
            >
              Add Contact
          </Button>
          </Container>

        </Container>

        <Container maxWidth='md'>
          <div style={{ "margin": "auto" }}>
            <TabMenu
              tabOptions={tabOptions}
            />
          </div>
        </Container>
        {/* 
        <Modal
          open={open}
          onClose={handleClose}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <AddClassForm />
        </Modal> */}
      </div>
    </>
  )
}
