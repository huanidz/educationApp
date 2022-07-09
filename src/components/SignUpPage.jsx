import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../resources/styles/componentStyle/LoginPage.css';
import "../resources/styles/globalStyle/common.css";


function SignUpPage(){

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = () => {
        if(username == "" || password == ""){
            alert("vui long nhap day du thong tin");
        }else{
            setIsLoading(true);
            axios.post('https://huy-huan.herokuapp.com/user', {
                'userName': username.toString(),
                'password': password.toString()         
            })
            .then((response)=>{
                setIsLoading(false);
                navigate("/login");
            })
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="login-background"></div>
                <div className="login-area">
                    <div className="login-title">Đăng Ký</div>
                    <div className="login-input-field">
                        <label htmlFor="ipUsername">Tên đăng nhập</label>
                        <input onChange={(e)=>{setUsername(e.target.value)}} type="text" id="ipUsername" name="txtUsername" spellCheck="false"/>
                        <br/>
                        <label htmlFor="ipPassword">Mật khẩu</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="ipPassword" name="txtPassword" spellCheck="false"/>
                    </div>
                    {isLoading ? (<div className="loading-effect-wrapper">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>) : <></>}
                    <button onClick={handleLogin} className="btn-login login-but">SignUp</button>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;