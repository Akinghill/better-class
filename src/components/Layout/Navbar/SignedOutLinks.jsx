import React from 'react'
import Button from '@material-ui/core/Button'

export default function SignedOutLinks() {
  return (
    <>
      <Button variant="text" color="default">
        Sign In
      </Button>
      <Button variant="text" color="default">
        Sign Up
      </Button>
    </>
  )
}
