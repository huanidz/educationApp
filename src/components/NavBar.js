import '../resources/styles/componentStyle/NavBar.css';
import '../resources/styles/globalStyle/common.css';

function NavBar() {
    return (
        <div className="main-nav">
            <div className="main-nav-logo"></div>
            <div className="main-nav-item">
                <ul className="main-nav-item-list">
                    <li className="main-nav-item-list-item">Khóa học</li>
                    <li className="main-nav-item-list-item">Bài viết</li>
                    <li className="main-nav-item-list-item">Đăng ký học</li>
                </ul>
            </div>
            <div className="main-nav-login">
                <button className="btn-navbar btn-login">Log in</button>
                <button className="btn-navbar btn-signup">Sign up</button>
            </div>
        </div>
    )
}

export default NavBar;