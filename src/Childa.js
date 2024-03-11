import {UserContext} from "./App13a"
import { useContext } from "react";
export default function Childa() {
  const {user,setUser} = useContext(UserContext);
  const handleName = () => {
    setUser("Cathy")
  }
  return (
    <>
      <h2>Hello {user} from Child component</h2>
      <button onClick={handleName}>Change to Cathy</button>
    </>
  );
}