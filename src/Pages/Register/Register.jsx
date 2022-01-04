import "./Register.scss";
import Logo from "../../images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab1 from "../Tabs/Tab1";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();


  function RegisterUser(event) {
    event.preventDefault();
  
    var users = JSON.parse(localStorage.getItem("users")  || "[]");
    var newuser = {
      email: email,
      password: password
    };
  
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate('/home');
    window.location.reload(true);
    console.log(JSON.stringify(users));
  
  }

 

  const routeLogin = () => {
    navigate("/login");
    window.location.reload(true);
  };

  return (
    <>
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="logo" />
          <button onClick={routeLogin} className="loginButton">
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <form className="input">
            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button className="registerButton">
              Get Started
            </button>
          </form>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
               setPassword(e.target.value);
              }}
            />
            <button className="registerButton" onClick={RegisterUser}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
    <Tab1/>
   
    </>

  );
}
