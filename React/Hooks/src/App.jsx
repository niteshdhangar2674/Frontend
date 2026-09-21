import './App.css'
import { Timer } from "./Component /UseEffect/Timer"
import { AuthProvider } from './Component /UseContext/AuthContext/AuthContext'
import Dashboard from './Component /UseContext/AuthDashboard/Dashboard'
import Count from './Component /UseState/Count'
import ChangeTitle from './Component /UseEffect/ChangeTitle'
import ModeHandler from './Component /UseEffect/ModeHandler'
import TextEditor from './Component /UseEffect/TextEditor'
import FormCompletionPercentage from "./Component /UseEffect/FormCompletionPercentage.jsx"
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

      {/* <TextEditor></TextEditor> */}

      <FormCompletionPercentage></FormCompletionPercentage>
    </>
  )
}

export default App
