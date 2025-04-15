import React from 'react'
import { useState } from 'react'
import axios from 'axios'
 import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate=useNavigate()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [cpassword,setCpassword]=useState()
async function addData(){
if(password===cpassword){
    console.log(name,email,password)
   const response= await axios.post("http://localhost:8000/register",{
    name,email,password
   })
   console.log(response)
   window.confirm("Data added successfully")
   navigate('/login')
}
     }

  return (
    <div>
        <h1>Register</h1>
        <input type='text' 
        placeholder='user name' 
        onChange={(e)=>setName(e.target.value)} required></input><br/>
        <input type='email' 
        placeholder='Email' 
        onChange={(e)=>setEmail(e.target.value)} required></input><br/>
        <input type='password' 
        placeholder='Password' 
        onChange={(e)=>setPassword(e.target.value)}></input>
        <br/>
        <input type='password' 
        placeholder='confirm password' 
        onChange={(e)=>setCpassword(e.target.value)}></input>
        <input type='submit' onClick={addData}></input>
    </div>
  )
}

export default Register