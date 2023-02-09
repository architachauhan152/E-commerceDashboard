import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";






const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')

    }

    })

  
  const handleData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result.result))
    localStorage.setItem('token',JSON.stringify(result.auth))

      navigate('/')
    
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        className="inputfield"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name...."
      />
      <input
        type="text"
        className="inputfield"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email...."
      />
      <input
        type="password"
        className="inputfield"
        value={password}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter Password...."
      />
      <button onClick={handleData} type="button" className="signup-btn">
        Sign up
      </button>
    </div>
  );
};
export default SignUp;
