import React from 'react'
import Navbar from './Navbar/Navbar'
import NewNav from './Navbar/NewNav'

export default function MainLayout({ currentUser, children }) {
  return (
    <>
      <NewNav>
      {children}
      
      </NewNav>
    </>
  )
}
