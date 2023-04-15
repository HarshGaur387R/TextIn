import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(prop) {

    const handleOnCheck = () => {
        prop.toggleMode();
    }

    return (

        <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-md-5" to="/">{prop.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>

                        <li className={`nav-item dropdown`}>
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul id="dropdown-menu" className={`dropdown-menu `}>
                                <li><Link className="dropdown-item" to="/Action">Action</Link></li>
                                <li><Link className="dropdown-item" to="/Another action">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/Settings">Settings</Link></li>
                                <div className="form-check form-switch ms-3 mt-2" >
                                    <input className="form-check-input" onChange={handleOnCheck} type="checkbox" id="flexSwitchCheckDefault" />
                                    <label htmlFor="flexSwitchCheckDefault">{prop.mode}</label>
                                </div>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-flex me-md-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

