import React from 'react'
import {Routes, Route} from "react-router-dom"
import "./App.css"

// Import Pages
import Home from './pages/Home'
import NoMatchPages from './pages/NoMatchPages'
import Calculator from './components/Calculator/calcu'
import Movies from './components/Movies/Movies'

function App() {
  return (
    <div className='font-sans text-gray-900 text-lg font-normal h-screen'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='*' element={<NoMatchPages/>}/>
      </Routes>
    </div>
  );
}

export default App;
