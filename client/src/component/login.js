import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() { 
    const navigate=useNavigate()
     const [email,setEmail]=useState()
     const [password,setPassword]=useState()

    async function checkData () {
        const response=await axios.post('http://localhost:8000/login',{
            email,
            password
        })
        console.log(response)
        navigate('/home')
    }
  return (
    <>
        <h1>Login</h1>
        <input type='text' 
        placeholder='email' 
        onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type='password' 
        placeholder='password' 
        onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={checkData}>Login</button>
    </>
  )
}

export default Login