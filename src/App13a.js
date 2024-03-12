import { useState, createContext, useContext } from "react";
import Childa from "./Childa";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
export const UserContext = createContext();
export default function App13a() {
  const [user, setUser] = useState("John");
  const [flag, setFlag] = useState(0);
  const [reg, setReg] = useState(0);
  console.log(flag);
  return (
    <>
      <UserContext.Provider value={{ user, setUser, flag, setFlag, reg, setReg}}>
        {/* <h2>Hello {user} from App13 component</h2> */}
        {(flag==0) ? <Login/> : (flag==1 ? <Register/> : (flag==2 && <Home/>))}
      </UserContext.Provider>
    </>
  );
}