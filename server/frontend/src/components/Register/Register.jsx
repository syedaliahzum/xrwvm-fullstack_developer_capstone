import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();
    const register_url = window.location.origin + "/djangoapp/register";
    const res = await fetch(register_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        password,
        firstName,
        lastName,
        email
      }),
    });
    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem('username', json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="register_container">
      <div className="register_panel">
        <div className="input_panel">
          <div className="input_panel_heading">SignUp</div>
          <div className="close" onClick={gohome}>
            <img src={close_icon} alt="close" />
          </div>
          <form onSubmit={register}>
            <div className="input_field">
              <img src={user_icon} alt="user" />
              <input placeholder="Username" type="text" value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="input_field">
              <img src={user_icon} alt="user" />
              <input placeholder="First Name" type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="input_field">
              <img src={user_icon} alt="user" />
              <input placeholder="Last Name" type="text" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="input_field">
              <img src={email_icon} alt="email" />
              <input placeholder="Email" type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input_field">
              <img src={password_icon} alt="password" />
              <input placeholder="Password" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input className="register_button" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
