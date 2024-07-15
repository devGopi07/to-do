import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Add from './pages/Add'
import View from './pages/View'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/to-do' element={<List/>}/>
      <Route path='/to-do/view/:id' element={<View/>}/>
      <Route path='/add-to-do' element={<Add/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
