import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const ResetPassword = ()=>{
  const [email , setEmail] = useState("");
  
  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/resetPassword",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email
      })
    })

    const data = await response.json();

    console.log(data);
  }
  
  return(
    <>
      <div className="password-reset-container">
        <form onSubmit={submitHandler}>
          <div className="field">
            <FaUser color={"#777"}/>
            <input 
              type="email"
              placeholder="Enter email..." 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <button type="submit">Send password reset link</button>
        </form>
      </div>
    </>
  )
}

export default ResetPassword;