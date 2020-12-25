import React from 'react'
import Navbar from './Navbar/Navbar'

export default function MainLayout({ currentUser, children }) {
  return (
    <>
      <Navbar currentUser={currentUser} />
      {children}
    </>
  )
}
