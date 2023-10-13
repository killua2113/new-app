import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Loader from "./Loading";
// import { useContext } from "react";
// import noteContext from "../context/notes/noteContext";

function Login(props) {
    const [credentials,setCredentials]=useState({email:"",password:""})
    const [loading,setLoading]=useState(false)
    // const context = useContext(noteContext);
    // const {authtoken1,authtoken2,setAuthtoken1,setAuthtoken2}=context
    let navigate=useNavigate();
    const handleSubmit= async(e)=>{
        setLoading({loading:true})
        props.setprogress(10);
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
            
          })
          props.setprogress(40);
          const json= await response.json()
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            props.setprogress(60);

            navigate("/")
            alert("login successfully")
            props.setprogress(100);
            setLoading({loading:false})

          }
          else
          {
            alert(json.error)
          }

    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value}) 
    
    }
  return (
    <div>
        {loading && <Loader/>}
      <form  id='loginform' onSubmit={handleSubmit}>
        <h2>Login to continue inote application</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={onChange} className="form-control" value={credentials.email} id="email" name='email'  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"  onChange={onChange} className="form-control" id="password"  value={credentials.password} name='password' />
  </div>
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>
    </div>
  )
}

export default Login
