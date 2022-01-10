import React from "react";
import Field from "../Field";
import Button from "../Buttons";
import './index.css';
import { useNavigate } from "react-router-dom";
function Register(){
    const navigate = useNavigate();
    return(
        <div className="register-top">
            <div className="register-top-container">
                <div className="register-field-container">
                    <img src={require("./images/logo.png")} alt='logo' className="r-top-left-logo"/>
                    <h1 className="register-title">Register Now</h1>
                    <Field label='Email' type='email' placeholder='username@mail.com'/>
                    <Field label='Password' type='password' placeholder='Password'/>
                        <div className="r-bottom-container">
                            <button onClick={() => {navigate('/login')}} className="r-btn"><Button label='Sign up'/></button>
                        </div>
                </div>
                <div className="register-right-logo">
                    <img src={require("./images/back1.jpg")} alt='logo2' className="r-logo"/>
                </div>
            </div>
        </div>
    );
}
export default Register;