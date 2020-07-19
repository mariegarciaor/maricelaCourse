import React from 'react';

const Hero = () => {

    return (
        <>
            {/* Hero */}
            <div id="hero">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-4">¿Buscas empleo?</h1>
                            <p id="lead-text">
                                Un buen CV es la clave para expresar
                                tu verdadero valor profesional y  
                                posicionarte como la mejor opción.
                            </p>
                            <hr className="my-4" />          
                            <a className="btn btn-info btn-lg" href="#servicios" role="button">
                                Quiero el mío
                            </a>
                        </div>
                    </div>
                </div>
                {/* /Hero */}
        </>
    )
}

export default Hero;