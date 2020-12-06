import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'

export default function ClassroomPage(props) {
  const { match } = props
  const { params } = match
  return (
    <div style={{ "color": "white" }}>
      <Container maxWidth="md">
        <Typography variant="h3">
          Hello Instructor
        </Typography>
        <Button
          color="primary"
          variant="contained"
        >
          Add Classroom
        </Button>
      </Container>
      {params.classroomName}
    </div>
  )
}
