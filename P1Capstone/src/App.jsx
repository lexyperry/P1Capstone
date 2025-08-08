import { useState } from 'react'
import './App.css'
import './WizardCard.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Wizards from './pages/Wizards.jsx'
import Spells from './pages/Spells.jsx'
import Search from './components/Search'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wizards" element={<Wizards />} />
          <Route path="/spells" element={<Spells />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
