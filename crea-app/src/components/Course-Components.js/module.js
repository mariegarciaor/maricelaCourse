import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import '../../styles/module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const CourseModule = () => (


        <div className="module-container">
            <Container className="container">
                <Row class="video-steps-container">
                    <Col md="auto">
                        <div style={{ width: 660, height: 'auto' }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                            <iframe className="module-video" title="module-video" width="560" height="315" src="https://www.youtube.com/embed/DSCKfXpAGHc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col md="auto" className="module-side-info">
                        <div>
                            <h4>Modulo 1</h4>
                            <h6>Titulo del video</h6>
                            <figure>
                                <img alt="instructor" />
                                <p>Nombre apellido</p>
                            </figure>
                        </div>
                        <div className="next-steps">
                            <h3>Siguientes pasos</h3>
                            <input type="checkbox" id="cbox2" value="second_checkbox"/> <label for="cbox2">Este es el primer paso</label>
                            <br></br>
                            <input type="checkbox" id="cbox2" value="second_checkbox"/> <label for="cbox2">Este es el segundo paso</label>
                            <br></br>
                            <input type="checkbox" id="cbox2" value="second_checkbox"/> <label for="cbox2">Este es el tercer paso</label>
                            <br></br>
                            <input type="checkbox" id="cbox2" value="second_checkbox"/> <label for="cbox2">Este es el cuarto paso</label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="module-video-description">
                        <h3>Descripción del video</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
            
            
        </div>

)

export default CourseModule;