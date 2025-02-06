import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (

    <>
      <Nav onCategorySelect={setSelectedCategory}/>
      <Outlet />
      <Footer />

    </>
  )
}
