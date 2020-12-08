import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
