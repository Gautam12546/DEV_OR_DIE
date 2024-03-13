
import { useState }  from 'react'
// import user_icon from "../Loginsignup/Components/src/public/person.png"
// import email_icon from "./assets/email.png"
// import pass_icon from "./assets/password.png"
import './loginsignup.css'


const Loginsignup = () => {
     
    const [action, setAction] = useState("Sign Up");
  return (
    <div className='mainbox'>
    <div className='container'>
      <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        {action==="Login"? <div></div>:<div className="input">
            <img src="/person.png" alt="" />
            <input type="text" placeholder='Name kya h bhai'/>
        </div>}
        
        <div className="input">
            <img src="/email.png" alt="" />
            <input type="email" placeholder='Email Id do'/>
        </div>
        <div className="input">
            <img src="/password.png" alt="" />
            <input type="password" placeholder='Password to bnta h'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Bhull Gya password vro <span>Yha Dbaye!</span></div>}
      
      <div className="submit-container">
        <div className={ action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={ action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>
      </div>
    </div>
    </div>
  )
}

export default Loginsignup;
