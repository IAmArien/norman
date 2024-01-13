import React from "react";

import './css/footer.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Spacer } from "../../utils";

export const Footer =(): React.ReactElement => {
    return (
        <React.Fragment>
            <div className="div-footer-contact">
                <Spacer style={{ height: '15px' }} />
                <div id="footerLinks">
                    <Container>
                        <Row>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-links-wrapper">
                                    <h3 className="h3-social-accounts">Social Accounts</h3>
                                    <ul className="ul-social-accounts">
                                        <li><a className="a-social-accounts" href="#" target="_blank">Facebook</a></li>
                                        <li><a className="a-social-accounts" href="#" target="_blank">Messenger</a></li>
                                        <li><a className="a-social-accounts" href="#" target="_blank">Gmail</a></li>
                                        <li><a className="a-social-accounts" href="#" target="_blank">LinkedIn</a></li>
                                        <li><a className="a-social-accounts" href="#" target="_blank">Outlook</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-links-wrapper">
                                    <h3 className="h3-social-accounts">Services</h3>
                                    <ul className="ul-service-accounts">
                                        <li><a className="a-service-accounts" href="#">Android / Web App Development</a></li>
                                        <li><a className="a-service-accounts" href="#">Consulting</a></li>
                                        <li><a className="a-service-accounts" href="#">Freelancing / Part Time</a></li>
                                        <li><a className="a-service-accounts" href="#">Contract-based</a></li>
                                        <li><a className="a-service-accounts" href="#">Tech Talk</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-links-wrapper">
                                    <h3 className="h3-social-accounts">Links</h3>
                                    <ul className="ul-service-accounts">
                                        <li><a className="a-service-accounts" href="#about">About</a></li>
                                        <li><a className="a-service-accounts" href="#whatIdo">What I Do</a></li>
                                        <li><a className="a-service-accounts" href="#experience">Experience</a></li>
                                        <li><a className="a-service-accounts" href="#projects">Projects</a></li>
                                        <li><a className="a-service-accounts" href="#skills">Skills and Technologies</a></li>
                                        <li><a className="a-service-accounts" href="#testimonials">Testimonials</a></li>
                                        <li><a className="a-service-accounts" href="#contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-buttons">
                                    <Button variant="outline-primary" size="lg" className="btn-footer">Download CV</Button>
                                    <Button variant="outline-primary" size="lg" className="btn-footer">Hire Me</Button>
                                    <Button variant="outline-primary" size="lg" className="btn-footer">Consulting</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="div-footer-wrapper">
                <Container>
                    <div id="footer" className="div-footer">
                        <h3 className="h3-footer-copyright">© 2020 Copyright | Developed By: Norman Palisoc</h3>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}