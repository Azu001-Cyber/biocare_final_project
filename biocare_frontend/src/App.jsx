// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'


function App() {

  return (
    <>
    
      <Routes>
        {/* Home Page route */}
        <Route path='/' element={<Home/>}/>

        {/* Disease detail page */}

        {/* Auth pages */}

        {/* Admin page */}
      </Routes>
    </>
  )
}

export default App
