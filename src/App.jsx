import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import HeadPhonePage from './pages/HeadPhonePage'
import SpeakerPage from './pages/SpeakerPage'
import EarPhonePage from './pages/EarPhonePage'
import { CartProvider } from './context/cardContext'
import Products from './compoents/Products'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main className='grow'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/headphones' element={<HeadPhonePage />} />
              <Route path='/speakers' element={<SpeakerPage />} />
              <Route path='/earphones' element={<EarPhonePage />} />
              <Route path="/products/:slug" element={<Products />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
