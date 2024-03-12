import React from "react";
import { UserContext } from "./App13a";
import { useContext } from "react";
import Home from "./Home";
import Register from "./Register";

const Login = () => {
  const { flag, setFlag } = useContext(UserContext);
//   if(flag==2){
//     console.log(flag);
//     return (<Home/>)
//   }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => setFlag((prev) => 1)}>Create an account</button>
      <button onClick={() => setFlag((prev) => 2)}>Go to Home</button>
    </div>
  );
};

export default Login;
