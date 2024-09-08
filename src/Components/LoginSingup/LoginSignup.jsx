import React, { useState } from 'react'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pwd_icon from '../Assets/password.png'
import './LoginSignup.css'

const LoginSignup = () => {
  const [action ,setAction]=useState("Login");


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
              <input type="text" placeholder='Name'/>
            </div>
          }
            <div className="input">
              <img src={email_icon} alt="email" />
              <input type="email" placeholder='email'/>
            </div>

            <div className="input">
              <img src={pwd_icon} alt="password" />
              <input type="password" placeholder='password'/>
            </div>
            
            {action==="Login"?<div></div>:
              <div className="input">
                <img src={pwd_icon} alt="password" />
                <input type="password" placeholder='Confirm password'/>
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
    </div>
  )
}

export default LoginSignup;