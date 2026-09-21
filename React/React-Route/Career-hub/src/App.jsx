import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Jobs } from './Components/Jobs'
import { Login } from './Components/Login';
import { PageNotFound } from './Components/NotFoundPage';
function App() {

  return (
    <>
      <h1>Carrier Hub</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='./login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>

  )
}

export default App
