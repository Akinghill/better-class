import React from 'react'
import { Button, Container, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import AddClassForm from '../../components/AddClassForm/AddClassForm'
import TabMenu from '../../components/TabMenu/TabMenu'

const useStyles = makeStyles({
  instructorPage: {
    display: "flex",
    padding: "2rem 2rem"
  }
});

export default function InstructorPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const tabOptions = ["Classrooms", "Roster", "Grades", "Other"]

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.instructorPage}>
      <Container maxWidth="md">
        <Typography variant="h3">
          Hello Instructor
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add Classroom
        </Button>
      </Container>

      <Container maxWidth='md'>
        <div style={{ "margin": "auto" }}>
          <TabMenu
            tabOptions={tabOptions}
          />
        </div>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddClassForm />
      </Modal>
    </div>
  )
}
