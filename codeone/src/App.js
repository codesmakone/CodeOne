import React from 'react'
import {Routes, Route} from "react-router-dom"
import "./App.css"

// Import Pages
import Home from './pages/Home'
import NoMatchPages from './pages/NoMatchPages'

function App() {
  return (
    <div className='font-sans text-gray-900 text-lg font-normal'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='*' element={<NoMatchPages/>}/>
      </Routes>
    </div>
  );
}

export default App;
