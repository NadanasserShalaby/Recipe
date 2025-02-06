import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Sidebar_1 from '../Sidebar_1/Sidebar_1';

export default function Layout() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (

    <>
    <Sidebar_1 onSelect={() => {}}  />
      <div className="flex flex-col items-center justify-center m-auto text-center p-20">
            <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
            
            

            <Link to="/" className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition">
                Go Back Home
            </Link>
        </div>

    </>
  )
}
