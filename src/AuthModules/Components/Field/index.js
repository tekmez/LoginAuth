import React, {useState} from "react";
import Icon from "./eyeIcon";
import './index.css';

function Field(props){
    const {label, type, placeholder} = props;
    const [passwordShow, setPasswordShow] = useState(type);
    const showPassword = () => {
        setPasswordShow(!passwordShow);
    };
    return(
        <div className="field-top-container">
            <span className="left-label">{label}</span>
            <input className="field-input" type={type} placeholder={placeholder}/>
            {type === 'password' && (<i className="icon" onClick={showPassword}><Icon/></i>)}
            {type === 'password' && <span className="bottom-label"> Forgot Password</span>}
        </div>
    );
}
export default Field;