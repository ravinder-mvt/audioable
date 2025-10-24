import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import HeadPhonePage from './pages/HeadPhonePage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/headphones' element={<HeadPhonePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
