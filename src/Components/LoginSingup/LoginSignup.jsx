import React, { useState } from 'react'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pwd_icon from '../Assets/password.png'
import './LoginSignup.css'

const LoginSignup = () => {
  const [user,setUser]=useState({});
  const [action ,setAction]=useState("Login");

  function handleUser(e){
    setUser({...user,[e.target.name]:e.target.value});
  }

  function submitSignupForm(){
    console.log(user);
    validateUser();
  }

  function validateUser(){
    if(action==="Sign Up" && !user.name && !user.email  && !user.password && !user.confirmPassword){
      alert("Please enter valid field");
    }else if(action==="Sign Up" && user.password!==user.confirmPassword){
      alert("password and confirm password not match");
    }else if(!user.email  && !user.password){
      alert("please fill all field");
    }
    else{
      alert("form fill successfully");
    }
  }
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:
            <div className="input">
              <img src={user_icon} alt="user" />
              <input type="text" name="name" placeholder='Name' onChange={(e)=>{handleUser(e)}}/>
            </div>
          }
            <div className="input">
              <img src={email_icon} alt="email" />
              <input type="email" name="email" placeholder='email' onChange={(e)=>{handleUser(e)}}/>
            </div>

            <div className="input">
              <img src={pwd_icon} alt="password" />
              <input type="password" name="password" placeholder='password' onChange={(e)=>{handleUser(e)}}/>
            </div>
            
            {action==="Login"?<div></div>:
              <div className="input">
                <img src={pwd_icon} alt="password" />
                <input type="password" name="confirmPassword" placeholder='Confirm password' onChange={(e)=>{handleUser(e)}}/>
              </div>
            }
        </div>
        {action==="Sign Up"?<div></div>:
          <div className="forgot-password">Lost Password?<span> Click Here!</span></div>
        }
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        <button onClick={(e)=>{submitSignupForm(e)}}>Click Me</button>
    </div>
  )
}

export default LoginSignup;