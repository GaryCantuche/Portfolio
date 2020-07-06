import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../../images/Logo.png';
import './../../styles/navbar.css';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <img src={logo} className="logo" width="40" height="40" style={{borderRadius:"50%", marginRight:"1vh"}} alt="" />
            <Link to="/" className="navbar-brand"> Gary Cantuche </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active navbar-hover">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active navbar-hover">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item active navbar-hover">
                        <Link to="/lenguages" className="nav-link">Lenguages</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;