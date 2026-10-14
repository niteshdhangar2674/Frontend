import './App.css'
import OpitimiseReducers from './Component/UseReducer/OptimiseReducers.jsx'
// import { Timer } from "./Component /UseEffect/Timer"
// import { AuthProvider } from './Component /UseContext/AuthContext/AuthContext'
// import Dashboard from './Component /UseContext/AuthDashboard/Dashboard'
// import Count from './Component /UseState/Count'
// import ChangeTitle from './Component /UseEffect/ChangeTitle'
// import ModeHandler from './Component /UseEffect/ModeHandler'
// import TextEditor from './Component /UseEffect/TextEditor'
// import FormCompletionPercentage from "./Component /UseEffect/FormCompletionPercentage.jsx"
import { Reducers } from './Component/UseReducer/Reducers.jsx'
import { UseMemoCounter } from './Component/UseMemo/UseMemoCounter.jsx'
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

      {/* <FormCompletionPercentage></FormCompletionPercentage> */}

      {/* <Reducers></Reducers> */}

      {/* <OpitimiseReducers></OpitimiseReducers> */}
      <UseMemoCounter></UseMemoCounter>
    </>
  )
}

export default App
