// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import Disease from './components/disease/DiseaseDetails'


function App() {

  return (
    <>
    
      <Routes>
        {/* Home Page route */}
        <Route path='/' element={<Home/>}/>

        {/* Disease detail page */}
        <Route path="/disease/:id" element={<Disease />} />

        {/* Auth pages */}

        {/* Admin page */}
      </Routes>
    </>
  )
}

export default App
