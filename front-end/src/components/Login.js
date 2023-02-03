import React,{useState} from "react";
const Login=() =>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("")
    const handleData=()=>{
        console.log(email,password)

    }
    return (
        <div className="login">

            <input className="inputfield" value={email} type="text" placeholder="Enter Email.." onChange={(e)=>setEmail(e.target.value)}/>
            <input className="inputfield" value={password} type="password" placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleData} type="button" className="signup-btn">Login</button>


        </div>
    )
}
export default Login;