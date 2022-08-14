import React , { useState } from "react";
import { FaGoogle , FaTwitter , FaFacebookF , FaLock , FaUser} from "react-icons/fa";
import { IconContext } from "react-icons";
import { TextField } from "@mui/material";
import { createTheme , ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette:{
    primary:{
      main:"#FCC312"
    }
  }
})

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/auth/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    console.log(data);

    switch (data.msg) {
      case "user with the given email doesn't exist":
        setError1(true);
        break;
      case "wrong password":
        setError2(true);
        break;
      case "ok":
        sessionStorage.setItem("profile", JSON.stringify(data));
        window.location.href = "/";
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="sign-in-container">
        <form autoComplete="off" className="sign-in-form" onSubmit={submitHandler}>
          <ThemeProvider theme={theme}>
            <TextField
              type="email"
              label="Enter email..."
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="input"
            />
            <TextField
              type="password"
              label="Enter password..."
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="input"
              id="last"
            />
          </ThemeProvider>
          <a href="/passwordReset" className="forgot">
            Forgot password ?
          </a>
          <button type="submit">
            Sign in
          </button>
          <div>
            <p className="dont">Don't have an account ? <a href="/signup" className="link">Sign up</a> </p>
          </div>
          <div>
            <p className="sign-in-with">or sign in with</p>
          </div>
          <div style={{ display: "flex" }}>
            <IconContext.Provider value={{ size: "1.5rem", color: "white" }}>
              <div className="circle" style={{ background: "#405498", cursor:"pointer" }}>
                <FaFacebookF />
              </div>
              <div className="circle" style={{ background: "#1DA1F2", cursor:"pointer" }}>
                <FaTwitter />
              </div>
              <div className="circle" style={{ background: "#F23D2F", cursor:"pointer" }}>
                <FaGoogle />
              </div>
            </IconContext.Provider>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;