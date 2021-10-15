import style from './Header.module.scss'
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
            
            <NavLink className="navbar-brand text-muted" to="/">Todos with Redux</NavLink>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className='nav-link text-secondary' exact activeClassName={`${style.active_link}`}>Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" className='nav-link text-secondary' activeClassName={`${style.active_link}`}>About App</NavLink>
                </li>
            </ul>

        </div>

    </nav>
    )
}

export default Header;