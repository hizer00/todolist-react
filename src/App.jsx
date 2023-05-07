import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home/Home'
import Todolist from './views/Todolist/Todolist'
import NotFound from './views/NotFound/NotFound'
import Navbar from './layout/Navbar'
import Cursor from './components/Cursor/Cursor'

import isDesktop from './hooks/isDesktop'
import New from './layout/new/New'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {isDesktop() ? <Cursor /> : ""}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='app' element={<Todolist />}>
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App