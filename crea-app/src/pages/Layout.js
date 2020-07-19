import React from 'react';

const Layout = () => {

    return (
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #5c47c2;">
                <div class="container">
                    <a class="navbar-brand" href="#">
                    <img src="assets/logo2.png" height="40" class="d-inline-block align-top" alt="" />
                    </a>

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
            </nav>

            <footer id="footer" class="pb-4 pt-4">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-12 col-lg">
                                <a href="#faq">Preguntas Frecuentes</a>
                            </div>
                            <div class="col-12 col-lg">
                                <a href="#contact">Contáctanos</a>
                            </div>
                            <div class="col-12 col-lg">
                                <a href="#programa-afiliados">¿Eres reclutador?</a>
                            </div>
                        </div>
                    </div>
            </footer>
        </body>
    )
}

export default Layout;