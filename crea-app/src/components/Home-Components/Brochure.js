import React from 'react';

const Brochure = () => {

    return (
        <>
            {/* Brochure */}
            <section id="brochure">
                <div className="container">
                    <h3>Podemos crear la mejor versión de tu CV</h3>
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card">
                                <img src="assets/strategy.PNG" className="card-img-top brochure-img" alt="..." />
                                <h5 className="card-title">Una estrategia clara</h5>
                                <p className="brochure-text">A través de una estrategia de posicionamiento 
                                    profesional, definimos con claridad el siguiente paso en tu carrera
                                    y el camino para llegar a él.</p>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="assets/design.PNG" className="card-img-top brochure-img" alt="..." />
                                <h5 className="card-title">Un diseño increíble</h5>
                                <p className="brochure-text">Trabajamos con fundamentos de diseño cuidando el detalle
                                    de las formas, tipografías, espacios y texturas. Con un resultado final estético
                                    y equilibrado.
                                </p>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="assets/storytelling.PNG" className="card-img-top brochure-img" alt="..." />
                                <h5 className="card-title">Una buena historia</h5>
                                <p className="brochure-text">Con técnicas de Storytelling y Copywritting
                                    hacemos que tu historia profesional sea atractiva y haga sentido al empleador,
                                    llevándolo por un camino claro y planeado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Brochure */}
        </>
    )
}

export default Brochure;