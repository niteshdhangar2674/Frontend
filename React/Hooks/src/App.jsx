import './App.css'
import { Timer } from "./Component /UseEffect/Timer"
import { AuthProvider } from './Component /UseContext/AuthContext/AuthContext'
import Dashboard from './Component /UseContext/AuthDashboard/Dashboard'
import Count from './Component /UseState/Count'
import ChangeTitle from './Component /UseEffect/ChangeTitle'
import ModeHandler from './Component /UseEffect/ModeHandler'
import TextEditor from './Component /UseEffect/TextEditor'
function App() {

  return (
    <>
      {/* <Timer></Timer> */}

      {/* <AuthProvider>
        <Dashboard></Dashboard>
      </AuthProvider> */}


      {/* <Count></Count> */}

      {/* <ChangeTitle></ChangeTitle> */}

      {/* <ModeHandler></ModeHandler> */}

      <TextEditor></TextEditor>
    </>
  )
}

export default App
