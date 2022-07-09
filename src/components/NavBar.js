import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../resources/styles/componentStyle/NavBar.css';
import '../resources/styles/globalStyle/common.css';

function NavBar(props) {

    let navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);

    const navigateToHomePage = ()=>{
        navigate("/");
    }

    useEffect(()=>{
        if(localStorage.getItem("accessUsername")){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    },[])

    const handleLogout = () => {
        console.log(localStorage);
        localStorage.removeItem("accessUsername");
        localStorage.removeItem("accessUserId");
        console.log(localStorage);
        setIsLogin(false);
        navigate("/");
    }

    return (

        <div className="main-nav">
            <div onClick={navigateToHomePage} className="main-nav-logo"></div>
            <div className="main-nav-item">
                {props.children}
            </div>
            <div className="main-nav-login">
                {isLogin ? <button onClick={handleLogout} className="btn-navbar btn-login">Log Out</button> :
                    <>
                        <button onClick={()=>{navigate("/login")}} className="btn-navbar btn-login">Log in</button>
                        <button onClick={()=>{navigate("/signup")}} className="btn-navbar btn-signup">Sign up</button>
                    </>
                } 
            </div>
        </div>
    )
}

export default NavBar;