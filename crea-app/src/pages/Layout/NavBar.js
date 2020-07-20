import React from 'react';
import LogoNav from '../../assets/logo2.png';
import '../../styles/navbar.css';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Home from '../../pages/Home';


const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#5c47c2"}}>
            <BrowserRouter>
            <div class="container">
                <Link class="navbar-brand" to="/Home">
                <img src={LogoNav} height="40" class="d-inline-block align-top" alt="" />
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" id="servicios-nav" href="#servicios">
                                Servicios
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#video-series"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Video series
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#vs-cv">Crea tu CV</a>
                            <a class="dropdown-item" href="#vs-empleo">Encuentra un empleo</a>
                            <a class="dropdown-item" href="#vs-entrevista">Practica tu entrevista</a>
                        </div>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#about">Acerca de</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#contact">Contáctanos</a>
                        </li>
                    </ul>
                </div>
            </div>
                <Route exact path='/home' component={Home} />
            </BrowserRouter>
        </nav>

    )
}

export default NavBar;