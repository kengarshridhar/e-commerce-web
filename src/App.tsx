import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Hero from './components/hero-sections'
import Login from './pages/login'
import NotFound from './pages/not-found'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
