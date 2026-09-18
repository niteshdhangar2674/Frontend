import UserName from "./Component/UserName";
import User from "./Component/Uesr";
function App() {
  return <>
    <h1>learn props</h1>
    <div>
      <UserName name="Nitesh" age={22} />
      <UserName name="Rohit" age={24} />
      <UserName name="Mohit" age={26} />
    </div>

    <div>
      <User>
        <h1>this is first children</h1>
      </User>
      <User>
        <h1>this is second children </h1>
      </User>

      <User>
        <h1>this is third children</h1>
      </User>
    </div>
  </>
} export default App;