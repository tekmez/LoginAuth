import React, {useEffect, useState} from "react";
import Field from "../Field";
import Button from "../Buttons";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login(){
    const navigate = useNavigate();
    const [infoLog, setInfoLog] = useState({email: "", password:""})
    const [user, setUser] = useState(null);
    const handleLogChange = (event) => {
        setInfoLog({...infoLog, [event.target.type]: event.target.value})
    }
    const checkUser = (user) => {
        if(user != null)
            navigate('/store');
    }
    const emailLogin = () =>{
        signInWithEmailAndPassword(auth, infoLog.email, infoLog.password).then(() => checkUser(user)).catch((e) => console.log(e));
    }
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if(authUser)
                setUser(authUser);
            else
                setUser(null);
        })
    }, [])
    return(
    <div className="login-top">
        <div className="login-top-container">
            <div className="login-field-container">
                <img src={require("./images/logo.png")} alt='logo' className="top-left-logo"/>
                <h1 className="login-title">Login</h1>
                <Field label='Email' type='email' placeholder='username@mail.com' value={infoLog.email} onChange={handleLogChange}/>
                <Field label='Password' type='password' placeholder='Password' value={infoLog.password} onChange={handleLogChange}/>
                    <div className="bottom-container">
                        <Button onClick={emailLogin} label='Sign in'/>
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