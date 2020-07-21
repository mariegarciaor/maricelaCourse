import React from 'react';
import LogoNav from '../../assets/logo2.png';
import '../../styles/navbar.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#5c47c2' }}>
      <BrowserRouter>
        <div className="container">
          <Link className="navbar-brand" to="/Home">
            <img src={LogoNav} height="40" className="d-inline-block align-top" alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" id="servicios-nav" href="#servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#video-series"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Video series
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#vs-cv">
                    Crea tu CV
                  </a>
                  <a className="dropdown-item" href="#vs-empleo">
                    Encuentra un empleo
                  </a>
                  <a className="dropdown-item" href="#vs-entrevista">
                    Practica tu entrevista
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </nav>
  );
};

export default NavBar;
