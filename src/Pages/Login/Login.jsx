import "./Login.scss";
import Logo from "../../images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  function login() {
    var users = JSON.parse(localStorage.getItem("users"));
    console.log(localStorage.getItem("users"),"user");
    var i = 0;
    for (let user of users) {
      if (user.email === email && user.password === password) {
        i++;
      }
    }
    if (i === 1) {
      alert("Login successful");
      localStorage.setItem("logged in", "logged in");
      navigate("/home");
      window.location.reload();
    } else {
      alert("Login failed.");
    }
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="login-body__submit-btn" onClick={login}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign Up Now</b>
          </span>
          <small>
            this page is protected by google reCaptcha to ensure yoy're noat a
            robot. <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
}
