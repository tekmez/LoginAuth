import React from "react";
import Field from "../Field";
import Button from "../Buttons";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    return(
    <div className="login-top">
        <div className="login-top-container">
            <div className="login-field-container">
                <img src={require("./images/logo.png")} alt='logo' className="top-left-logo"/>
                <h1 className="login-title">Login</h1>
                <Field label='Email' type='email' placeholder='username@mail.com'/>
                <Field label='Password' type='password' placeholder='Password'/>
                    <div className="bottom-container">
                        <Button label='Sign in'/>
                        <p className="bottom-text">Don't have an account yet ?
                        <button onClick={() => {navigate('/register')}} className="register-btn">Register for Free</button>
                        </p>
                    </div>
            </div>
            <div className="login-right-logo">
                <img src={require("./images/loginRight.jpg")} alt='logo2'/>
            </div>
        </div>
    </div>
    );
}
export default Login;