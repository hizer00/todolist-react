import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { createHashHistory } from 'history';

import Home from './views/Home/Home'
import Todolist from './views/Todolist/Todolist'
import NotFound from './views/NotFound/NotFound'
import Navbar from './layout/Navbar'
import Cursor from './components/Cursor/Cursor'

import isDesktop from './hooks/isDesktop'
import New from './layout/new/New'

function App() {

  const hashHistory = createHashHistory();

  return (
    <HashRouter  history={hashHistory}>
      <Navbar />
      {isDesktop() ? <Cursor /> : ""}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='app' element={<Todolist />}>
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </HashRouter>
  )
}

export default App