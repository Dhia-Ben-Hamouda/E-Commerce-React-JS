import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import url from "../api/baseURL.js";

const theme = createTheme({
  palette: {
    primary: {
      main:"#FCC312"
    }
  }
})

const SignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch(`${url}/auth/signUp`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password
      })
    })

    const data = await response.json();

    if (data.msg === "user created succesfully") {
      setSuccess(true);
    }
    else if (data.msg === "User with the same email already exists") {
      setFailure(true);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="sign-up-container">
          <form autoComplete="off" className="sign-up-form" onSubmit={submitHandler}>
            <TextField
              className="input"
              type="text"
              label="Enter name..."
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <TextField
              className="input"
              type="text"
              label="Enter phone..."
              value={phone}
              onChange={(e) => { setPhone(e.target.value) }}
            />
            <TextField
              className="input"
              type="email"
              label="Enter email..."
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <TextField
              className="input"
              type="password"
              label="Enter password..."
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <button type="submit">Sign up</button>
            <div>
              <p className="already" style={{ margin: ".8rem 0", color: "#777" }}>Already have an account ? <a href="/signin" className="link">Sign in</a> </p>
            </div>
          </form>
        </div>
      </ThemeProvider>
    </>
  );
}

export default SignUp;