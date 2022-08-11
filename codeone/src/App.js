import React from 'react'
import {Routes, Route} from "react-router-dom"
import "./App.css"

// Import Pages
import Home from './pages/Home'

function App() {
  return (
    <div className='font-sans text-gray-900 text-lg font-light'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
