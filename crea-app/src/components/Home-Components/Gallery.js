import React from 'react';

const Gallery = () => {

    return (
        <>
            {/* Galeria */}
            <section id="galeria">
                <div className="container">
                    <h3>Tu CV podría verse así de increíble:</h3>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/cv1.png" className="d-block w-100" alt="curriculum-1" />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/cv2.png" className="d-block w-100" alt="curriculum-2" />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/cv3.png" className="d-block w-100" alt="curriculum-3" />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/cv4.png" className="d-block w-100" alt="curriculum-4" />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/cv5.png" className="d-block w-100" alt="curriculum-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Galeria */}
        </>
    )
}

export default Gallery;