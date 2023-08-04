import React, { useState, useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
import "../css/Login.css"
export const Login = () => {
  
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("")
  const navigate = useNavigate()
  const logInUser = () => {
    console.log(user)
    console.log(pass)
    if(user.length === 0){
      alert("Email has left Blank!");
      navigate("/login")
    }
    else if(pass.length === 0){
      alert("password has left Blank!");
      navigate("/login")
    }
    
    else{
        axios.post('http://127.0.0.1:5000/fetchAdmin', {
            username: user,
            password: pass
        })
        .then(function (response) {
            console.log(response);
            //console.log(response.data);
            navigate("/Doctors");
        })
        .catch(function (error) {
            console.log(error, 'error');
    if (error.response.status === 401) {
      alert("Invalid credentials");
      navigate("/login")
    }
        });
    }
  }
  return (
    <div className="login-container">
      <div><h1>Iniciar Sesión</h1></div>
      <form >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user}
          onChange={(e) => {setUser(e.target.value)}}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => {setPass(e.target.value)}}
          required
        />
        <button className="button-login" type="button" onClick={logInUser}>Login</button>
      </form>
    </div>
  );
  
}

export default Login