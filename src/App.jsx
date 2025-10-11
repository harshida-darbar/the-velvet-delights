import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/products" element={<Products />} />
         <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
