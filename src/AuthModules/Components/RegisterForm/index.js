import React, {useState} from "react";
import Field from "../Field";
import Button from "../Buttons";
import './index.css';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
function Register(){
    const navigate = useNavigate();
    const [info, setInfo] = useState({email: "", password:""});
    const handleChange = (event) => {
        setInfo({...info, [event.target.type]: event.target.value})
    }
    const signUp = () => {
        createUserWithEmailAndPassword(auth, info.email, info.password).then(() => navigate('/login'))
    }
    return(
        <div className="register-top">
            <div className="register-top-container">
                <div className="register-field-container">
                    <img src={require("./images/logo.png")} alt='logo' className="r-top-left-logo"/>
                    <h1 className="register-title">Register Now</h1>
                    <Field label='Email' type='email' placeholder='username@mail.com' value={info.email} onChange={handleChange}/>
                    <Field label='Password' type='password' placeholder='Password' value={info.password} onChange={handleChange}/>
                        <div className="r-bottom-container">
                            <button className="r-btn"><Button onClick={signUp} label='Sign up'/></button>
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