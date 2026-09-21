import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Jobs } from './Components/Jobs'
import { Login } from "./Components/Login"
import { PageNotFound } from './Components/NotFoundPage';
import { Navbar } from './Components/Navbar';
import { JobDetails } from './Components/JobDetails';
import { JobApplied } from './Components/JobApplied';
function App() {

  return (
    <>
      <h1>Carrier Hub</h1>
      <Navbar></Navbar>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
        <Route path='/jobs/:id/applied' element={<JobApplied />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>

  )
}

export default App
