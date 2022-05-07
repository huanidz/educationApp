import '../resources/styles/componentStyle/NavBar.css';
import '../resources/styles/globalStyle/common.css';

function NavBar(props) {
    return (
        <div className="main-nav">
            <div className="main-nav-logo"></div>
            <div className="main-nav-item">
                {props.children}
            </div>
            <div className="main-nav-login">
                <button className="btn-navbar btn-login">Log in</button>
                <button className="btn-navbar btn-signup">Sign up</button>
            </div>
        </div>
    )
}

export default NavBar;