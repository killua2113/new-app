import React,{useEffect} from 'react'
import img2 from '../images/logo1.png'
// import img3 from '../images/gmaillogo.png'
import img4 from '../images/logo2.png'
// import img5 from '../images/instagram.png'
import img6 from '../images/twitter.png'
import { useLocation } from "react-router-dom";
// import PropTypes from 'prop-types'



const Navbar=()=>{
  //  props.location=useLocation().pathname
let location=useLocation().pathname;
useEffect(()=>{
  // console.log(location);
},[location]);
 const handleLogout=()=>{
  localStorage.removeItem('token')
 } 
  
 
  
    return (
      <div>
        <nav className=" fixed-top  navbar navbar-expand-lg bg-light" id="navbar1"  >
  <div className="container-fluid">
    <a href="/"><img src={img2} alt="" /></a>
   
    <a className="navbar-brand mx-3" href="/"  style={{"color":`${location==="/"?"red":"black"}`}}   > The World Affairs </a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active"   style={{"color":`${location==="/"?"red":"black"}`}}  aria-current="page" href="/" ></a>
        </li> */}
        <li className="nav-item">
          <a className= "nav-link active"  style={{"color":`${location==="/climate"?"red":"black"}`}} href="/climate" >Climate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{"color":`${location==="/health"?"red":"black"}`}}   href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  style={{"color":`${location==="/sports"?"red":"black"}`}} href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{"color":`${location==="/science"?"red":"black"}`}}  href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active"  style={{"color":`${location==="/entertainment"?"red":"black"}`}} href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active"  style={{"color":`${location==="/notes"?"red":"black"}`}} href="/notes">inote</a>
        </li>
        {!localStorage.getItem('token')?<li className="nav-item">
          <a className="nav-link  active"  style={{"color":`${location==="/signup"?"red":"black"}`}} href="/signup">Signup</a>
        </li>:<li className="nav-item">
          <a className="nav-link  active"  style={{"display":"none" }} href="/login">Login</a>
        </li> }
        {!localStorage.getItem('token')?<li className="nav-item">
          <a className="nav-link  active"  style={{"color":`${location==="/login"?"red":"black"}`}} href="/login">login</a>
        </li>:<li className="nav-item">
          <a className="nav-link  active"  style={{"color":`${location==="/"?"red":"black"}`}} href="/" onClick={handleLogout} >Logout</a>
        </li>}
      </ul>
      {/* <form className='d-flex'>
      <a className="btn btn-primary" href="#" role="button">Login</a>
      <a className="btn btn-primary" href="#" role="button">Signup</a>
        <button className='btn btn-primary' type="submit">Login</button>
        <button className='btn btn-primary' type="submit">Signup</button>
      </form> */}
      <div className='d-flex' id="twitter" >
      <a href="https://www.twitter.com/" target="_blank"className='d-flex mx-4 'rel="noreferrer"><img src={img6} alt=""/></a>
      {/* <a href="/"id="mtext"><p>Mail Us</p></a> */}

      </div>
      {/* <div className='d-flex' id="insta" > */}
      {/* <a href="https://www.instagram.com/"  target="_blank" className='d-flex mx-4 ' rel="noreferrer" ><img src={img5} alt=""/></a> */}
      {/* <a href="/"id="itext"><p>Follow</p></a> */}

      {/* </div> */}
      
      <div className='d-flex' id="mailt" >
      <a href="https://www.gmail.com/"target="_blank" rel="noreferrer" className='d-flex mx-4 '><img src={img4} alt=""/></a>
      {/* <a href="/"id="mtext"><p>Mail Us</p></a> */}

      </div>
      
    </div>
  </div>
  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
</nav>
      </div>
    )
  
}
// Navbar.defaultProps={
//   location:"/"

// }
// Navbar.propTypes={
//   location:PropTypes.string
// }

export default Navbar
