import React from 'react';

const Services = () => {

    return (
        <>
            {/* Services */}
            <section id="servicios" className="mb-5 mt-5">
                <div className="container">
                    <h3>Encontremos el trabajo de tus sueños</h3>
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="assets/cover-l1.png" alt="Card image cap" />
                            <i className="fas fa-keyboard"></i>
                            <div className="card-body">
                                <h5 className="card-title">Diseño de Curriculum Vitae</h5>
                                <h6>2 días</h6>
                                <p className="card-text">¡No sufras por horas intentando hacer 
                                    un CV que no te representa realmente!
                                    Nosotros tendremos un diseño único
                                    para ti en tan solo dos días.</p>
                                <button type="button" className="btn btn-outline-info">Ver más</button>
                            </div>
                        </div>
                        <div className="card"> 
                            <img className="card-img-top" src="assets/cover-l2.png" alt="Card image cap" />
                            <i className="fas fa-magic"></i>
                            <div className="card-body">
                                <h5 className="card-title">Masterclass individual</h5>
                                <h6>2 horas</h6>
                                <p className="card-text">En esta súper clase te enseñamos
                                    conocer tus valores profesionales, identificar vacantes
                                    con las que haces match y encontrar la empresa de tus sueños.</p>
                                <button type="button" className="btn btn-outline-info">Ver más</button>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="assets/cover-l3.png" alt="Card image cap" />
                            <i className="fas fa-chess-knight"></i>
                            <div className="card-body">
                                <h5 className="card-title">Coaching continuo</h5>
                                <h6>30 minutos</h6>
                                <p className="card-text">
                                    A través de micro-sesiones semanales damos un seguimiento
                                    de cerca a tu proceso de selección
                                    con soporte continuo e inmediato vía WhatsApp O:
                                </p>
                                <button type="button" className="btn btn-outline-info">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Services */}
        </>
    )
}

export default Services;