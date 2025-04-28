import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Hero from './components/hero-sections'
import Login from './pages/login'
import About from './pages/about'

import NotFound from './pages/not-found'
import PublicLayout from './components/layout/publicLayout'
import Products from './pages/Products'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Hero />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Products/>}/>

          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
