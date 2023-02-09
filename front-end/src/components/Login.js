import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Login=() =>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }

    },[])
    const handleData=async ()=>{
        console.log(email,password)
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json()
        console.log(result)
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user))
            localStorage.setItem("token",JSON.stringify(result.auth))

            navigate('/')

        }else{
            alert("please enter the correct details")
        }

        

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