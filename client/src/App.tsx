import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/auth'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
