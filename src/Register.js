import React from "react";
import { UserContext } from "./App13a";
import { useContext, useState, useEffect } from "react";
import './Register.css'

const Register = () => {
  const { flag, setFlag } = useContext(UserContext);
  const { reg, setReg } = useContext(UserContext);
//   const [show, setShow] = useState(false);
//   console.log(show);


  return (
    <div className="regg">
      Register
      <button onClick={() => setFlag((prev) => 2)}>Home</button>
      <button onClick={() => setReg((prev) => 3)}>Signup</button>
      <div className="register">
      {reg==3 && <div>Enter Details</div>}
      </div>
      
    </div>
  );
};

export default Register;
