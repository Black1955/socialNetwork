import "./App.scss";
import { FC } from "react";
import Login from "./components/Login/Login";
const App: FC = () => {
  return <div>
   <Login email={"babadid346@gmail.com"} password={"12345678"} setEmail={()=>{}} setPassword={()=>{}}/>
  </div>;
}

export default App;