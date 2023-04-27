import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tinycolor from "tinycolor2";

export default function Navbar(prop) {

    const handleOnCheck = () => {
        prop.toggleDarkModeState(!prop.isDarkModeEnable);
    }

    const handleOnSearchText = () =>{
        prop.setSearchBoxText(document.getElementById('inputSearchBox').value);
        prop.setShowTextSearchWindow(!prop.showTextSearchWindow);
    }

    useEffect(()=>{
        if (prop.isDarkModeEnable) {
            document.querySelector('.navbar').style.backgroundColor = tinycolor(prop.theme.backgroundColor).darken(5).toString();
            document.querySelector('.navbar').classList.add('navbar-dark');
            
            document.querySelector('.navbar-brand').style.color = "white";
            document.querySelectorAll('.nav-link').forEach((e)=>{
                e.style.color = "white";
            });


            document.querySelector('.dropdown-menu').style.border = '1px solid white';
            document.querySelector('.dropdown-menu').style.backgroundColor = tinycolor(prop.theme.backgroundColor).darken(3).toString();
            document.querySelectorAll('.dropdown-item').forEach((e)=>{
                e.style.color = "white";
                e.style.backgroundColor = tinycolor(prop.theme.backgroundColor).darken(3).toString();
                e.addEventListener('mouseover',()=>{
                    e.style.backgroundColor = tinycolor(prop.theme.backgroundColor).darken(5).toString();
                })
                e.addEventListener('mouseout',()=>{
                    e.style.backgroundColor = tinycolor(prop.theme.backgroundColor).darken(3).toString();
                })
            });


            document.querySelector('.dropdown-divider').style.backgroundColor = "white";
            document.getElementById('inputSearchBox').style.backgroundColor = tinycolor(prop.theme.backgroundColor).brighten(80);

        }
        else{
            document.querySelector('.navbar').style.backgroundColor = tinycolor('white').darken(5).toString();
            document.querySelector('.navbar').classList.remove('navbar-dark');
            
            document.querySelector('.navbar-brand').style.color = "black";
            document.querySelectorAll('.nav-link').forEach((e)=>{
                e.style.color = "black";
            });


            document.querySelector('.dropdown-menu').style.border = '1px solid gray';
            document.querySelector('.dropdown-menu').style.backgroundColor = "white";
            document.querySelectorAll('.dropdown-item').forEach((e)=>{
                e.style.color = "black";
                e.style.backgroundColor = "white";

                e.addEventListener('mouseover',()=>{
                    e.style.backgroundColor = tinycolor("white").darken(5).toString();
                })
                e.addEventListener('mouseout',()=>{
                    e.style.backgroundColor = tinycolor("white");
                });
            });


            document.querySelector('.dropdown-divider').style.backgroundColor = "gray";
            document.getElementById('inputSearchBox').style.backgroundColor = "white";

        }
    });

    return (

        <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-md-5" to="/">{prop.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
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
                            <ul id="dropdown-menu" className="dropdown-menu" >
                                <li><Link className="dropdown-item" to="/Action">Action</Link></li>
                                <li><Link className="dropdown-item" to="/Another action">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                <div className="form-check form-switch ms-3 mt-2" >
                                    <input className="form-check-input" onChange={handleOnCheck} type="checkbox" id="flexSwitchCheckDefault" />
                                    <label htmlFor="flexSwitchCheckDefault">{prop.mode}</label>
                                </div>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-flex me-md-5">
                        <input id="inputSearchBox" className="form-control me-2" type="search" placeholder="Search Text" aria-label="Search" />
                        <button className="btn btn-primary" onClick={handleOnSearchText}>Search</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

