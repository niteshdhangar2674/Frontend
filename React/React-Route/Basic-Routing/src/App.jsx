import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Component/Home'
import { About } from './Component/About'
import { Contact } from './Component/Contact'
import { PageNotFound } from './Component/PageNotFound'
import { Navbar } from './Component/Novbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={< PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
