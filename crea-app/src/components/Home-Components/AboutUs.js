import React from 'react';

const AboutUs = () => {

    return (
        <>
            {/* About us */}
            <section id="about" class="mb-5 mt-5">
                <div class="container text-center">
                    <h3>Acerca de Marie Garcia</h3>
                    <div class="text-center">
                        <img src="./assets/marie-foto.png" class="img-fluid" id="foto-marie" alt="Marie Garcia" />
                    </div>
                    <p>"Soy un alma emprendedora atrapada en el cuerpo de
                    una experimentada especialista en Gestión de Talento.
                    Mi pasión es el desarrollo profesional y la tecnología.
                    Creo que con prospectiva una persona puede cambiar su realidad
                    y ser feliz en el empleo correcto."</p>
                    <p><strong>Trabajemos juntos.</strong></p>
                </div>
            </section>
            {/* /About us */}
        </>
    )
}

export default AboutUs;