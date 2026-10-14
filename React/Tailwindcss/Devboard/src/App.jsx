import './App.css'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { StatCard } from './Components/StatCard'

function App() {

  return (

    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar></Sidebar>
      <div className='flex-1'>
        <Navbar></Navbar>
        <main className='p-6'>
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
        </main>
      </div>
    </div>



  )
}

export default App
