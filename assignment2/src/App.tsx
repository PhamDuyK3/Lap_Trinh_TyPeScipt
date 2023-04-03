import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePage from './pages/homepage'
import Detailpage from './pages/detailpage'
import DetailLayout from './components/layout/detailLayout'
import AdminLayout from './components/layout/adminLayout'
import Adminpage from './pages/adminpage'

// 1. Khai báo router react-router-dom

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}> {/* user layout */}
        <Route index element={<HomePage/>}/> 
      </Route>
      <Route path='/' element={<DetailLayout/>}> {/* user layout */}
      <Route path='/detail' element={<Detailpage/>}/>
      </Route>
      <Route path='/' element={<AdminLayout/>}> {/* user layout */}
      <Route path='/admin' element={<Adminpage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
