import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Loader from "./Loading";



function Signup(props) {
    const [loading,setLoading]=useState(false)
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",gender:""})
    let navigate=useNavigate();
    const handleSubmit= async(e)=>{
        setLoading({loading:true})
        props.setprogress(10);
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'content-Type': 'application/json',
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,gender:credentials.gender})
            
          })
          props.setprogress(40);
          const json= await response.json()
          console.log(json)
          props.setprogress(60);
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            navigate("/")
            alert("Signup successfully")
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
        <form  className="signup mx-3 "  onSubmit={handleSubmit}>
            <h2>Create an account to use inote application</h2>
        <div className="mb-3 ">
    <label htmlFor="name" className="form-label">Name</label>
    <input htmlFor="text" name="name"  className="form-control" value={credentials.name} id="name" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name="email"  className="form-control" value={credentials.email} id="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"   name="password" className="form-control" value={credentials.password} id="password" onChange={onChange} minLength={5} required />
  </div>
  <div className="mb-3">
    <label htmlFor="gender"  className="form-label">Gender</label>
    <input htmlFor="gender" name="gender" className="form-control" value={credentials.gender} id="gender" onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
    </div>
  )
}

export default Signup
