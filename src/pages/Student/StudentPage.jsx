import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core'

import TabMenu from '../../components/TabMenu/TabMenu'


const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 2rem"
  }
})

export default function StudentPage(props) {
  const classes = useStyles();
  const tabOptions = ["Projects", "Assessments"]
  const { match } = props
  const { params } = match

  return (
    <Container class={classes.pageContainer}>
      <Container class={classes.classPanel} maxWidth="md">
        <Typography variant="h3">
          When this page is loaded, fetch api/student/:studentID 
          and display info for that student
        </Typography>
      </Container>
      <Container maxWidth="md">
        <div style={{ "margin": "auto" }}>
          <TabMenu
            tabOptions={tabOptions}
          />
        </div>
      </Container>
    </Container>
  )
}
