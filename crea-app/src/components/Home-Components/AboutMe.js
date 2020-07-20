import React from 'react';
import marieFoto from '../../assets/marie-foto.png';
import '../../styles/aboutme.css';


const AboutMe = () => {

    return (
        <>
            {/* About me */}
            <section id="about" className="mb-5 mt-5">
                <div className="container text-center">
                    <h3>Acerca de Marie Garcia</h3>
                    <div className="text-center">
                        <img src={marieFoto} className="img-fluid" id="foto-marie" alt="Marie Garcia" />
                    </div>
                    <p>"Soy un alma emprendedora atrapada en el cuerpo de
                    una experimentada especialista en Gestión de Talento.
                    Mi pasión es el desarrollo profesional y la tecnología.
                    Creo que con prospectiva una persona puede cambiar su realidad
                    y ser feliz en el empleo correcto."</p>
                    <p><strong>Trabajemos juntos.</strong></p>
                </div>
            </section>
            {/* /About me */}
        </>
    )
}

export default AboutMe;