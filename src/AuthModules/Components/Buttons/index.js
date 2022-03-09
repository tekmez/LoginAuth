import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider, facebookProvider } from "../../../config/firebase" 
import Ficon from "./icons/ficon";
import Gicon from "./icons/gIcon"
import HubIcon from "./icons/hubIcon";
import './index.css';

function Button(props){
    const {label, onClick} = props;
    const navigate = useNavigate()
    // Firstly in user is empty
    const [user, setUser] = useState(null);
    // İf the user login navigate store page
    const checkUser = (user) => {
        if(user != null)
            navigate('/store');
    }
    // User login methods
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider).then(() => {
            checkUser(user);
        })
    }
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider).then(() => {
            checkUser(user);
        })
    }
    const facebookLogin = () => {
        signInWithPopup(auth, facebookProvider).then(() => {
            checkUser(user);
        })
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
        <div>
            <button onClick={onClick} className="sign-btn">{label}</button>
            {label === 'Sign in' && (
            <div className="connect-field">
                <p className="continue-text">or continue with</p>
                    <div className="connect-btn">
                            <button onClick={googleLogin} className="icon-btn"><i><Gicon/></i></button>
                            <button onClick={githubLogin} className="icon-btn"><i><HubIcon/></i></button>
                            <button onClick={facebookLogin} className="icon-btn"><i><Ficon/></i></button>
                    </div>
            </div>
            )}
        </div>
    );
}
export default Button;
