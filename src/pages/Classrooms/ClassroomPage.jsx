import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core'

import ClassRoster from '../../components/ClassRoster/ClassRoster'
import TabMenu from '../../components/TabMenu/TabMenu'

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 2rem"
  }
})

export default function ClassroomPage(props) {
  const classes = useStyles();
  const tabOptions = ["Roster", "Projects", "Assessments"]
  const { match } = props
  const { params } = match

  return (
    <Container class={classes.pageContainer}>
      <Container class={classes.classPanel} maxWidth="md">
        <Typography variant="h3">
          {params.classroomName}
        </Typography>
        <Button
          color="primary"
          variant="contained"
        >
          Add Student
        </Button>
      </Container>
      <Container maxWidth="md">
        {/* <ClassRoster /> */}
        <div style={{ "margin": "auto" }}>
          <TabMenu
            tabOptions={tabOptions}
          />
        </div>
      </Container>
    </Container>
  )
}
