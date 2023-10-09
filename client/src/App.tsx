import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/main/mainPage'

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
)

export default App
