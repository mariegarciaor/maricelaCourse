import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../../styles/gallery.css';

import cv1 from '../../assets/cv1.png';
import cv2 from '../../assets/cv2.png';
import cv3 from '../../assets/cv3.png';
import cv4 from '../../assets/cv4.png';
import cv5 from '../../assets/cv5.png';



const Gallery = () => {

    return (
        <>
            {/* Galeria */}
            <section id="galeria">
                <div>
                    <h3>Tu CV podría verse así de increíble:</h3>
                    <Carousel id="#gallery">
                        <Carousel.Item>
                            <img
                            className="d-block w-100 gallery-img"
                            src={cv1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 gallery-img"
                            src={cv2}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 gallery-img"
                            src={cv3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 gallery-img"
                            src={cv4}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 gallery-img"
                            src={cv5}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            {/* /Galeria */}
        </>
    )
}

export default Gallery;