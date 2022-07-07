import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../resources/styles/componentStyle/LoginPage.css';
import "../resources/styles/globalStyle/common.css";


function LoginPage(){

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = () => {
        setIsLoading(true);
        axios.get('https://huy-huan.herokuapp.com/user', {headers: {
            "Access-Control-Allow-Origin": "*"
        }})
        .then((response)=>{
            let listUser = response.data;
            const userFound = listUser.find((user)=>{
                return (user.userName === username && user.password === password);
            });

            if(userFound){
                setIsLoading(false);
                localStorage.setItem("accessUsername", userFound.username);
                localStorage.setItem("accessUserId", userFound.id);
                navigate("/");
            }
        })
    }

    return (
        <>
            <div className="login-page">
                <div className="login-background"></div>
                <div className="login-area">
                    <div className="login-title">Đăng nhập</div>
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
                    <button onClick={handleLogin} className="btn-login login-but">Login</button>
                </div>
            </div>
        </>
    );
}

export default LoginPage;