import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav/Nav';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Detaile from './Component/Detaile/Detaile';
// import Sidebar from './Component/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Sidebar_1 from './Component/Sidebar_1/Sidebar_1';

function App() {
  const [count, setCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Home />} />
          <Route path="/detaile/:id" element={<Detaile />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  )
}

export default App
