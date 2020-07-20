import React from 'react';
import '../../styles/footer.css';

const Footer = () => {

    return (
        <footer id="footer" class="pb-4 pt-4"  style={{backgroundImage: "linear-gradient(90deg, #18a1b8, #34c1c6 25%, #78eaef)"}}>
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
    )
}

export default Footer;