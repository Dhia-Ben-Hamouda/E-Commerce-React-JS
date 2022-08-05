import React, { useState } from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCC312"
    }
  }
})

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/resetPassword", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    })

    const data = await response.json();

    console.log(data);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="password-reset-container">
          <form autoComplete="off" onSubmit={submitHandler}>
            <TextField
              type="email"
              label="Enter email..."
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="field"
            />
            <button type="submit">Send password reset link</button>
          </form>
        </div>
      </ThemeProvider>
    </>
  )
}

export default ResetPassword;