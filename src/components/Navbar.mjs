import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(prop) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-md-5" href="/">{prop.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">About</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">{prop.aboutText}</a></li>
                        <div class="form-check form-switch ms-3 mt-2">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                            </ul>
                        </li>
                    </ul>


                    <div className="d-flex me-md-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <input className="form-control me-2" type="search" placeholder="Replace" aria-label="Search" />
                    </div>
                </div>
            </div>
        </nav>

    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
};

Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'ABout'
}