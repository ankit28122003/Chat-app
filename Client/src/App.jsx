import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import assets from './assets/assets'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-cover">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Profile' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
