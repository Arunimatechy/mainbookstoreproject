
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import ProtectedRoute from './Components/ProtectedRoute'

import Home from './Pages/Home'
import Bookdetail from './Pages/Bookdetail'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AddBook from './Pages/Addbook'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>

     
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/addbook"
          element={
            <ProtectedRoute>
              <AddBook />
            </ProtectedRoute>
          }
        />

      
        <Route path="/bookdetail" element={<Bookdetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  )
}

export default App