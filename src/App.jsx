import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Portfolio from './Components/Portfolio'

function App() {
  
   
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </>
  )
}

export default App
