import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import './css/about.css';

import { Spacer } from '../../';

import NormanAboutPhoto from '../../../assets/images/NormanAboutPhoto.png';

export const About =(): React.ReactElement => {
    return (
        <React.Fragment>
            <div className="about-content-wrapper">
                <Spacer style={{ height: '100px' }} />
                <Container>
                    <div className="div-about-responsive-web">
                        <Row>
                            <Col lg={7} md={6} sm={12}>
                                <h3 className="h2-sub-title">Hello! I am Norman Palisoc</h3>
                                <h1 className="h1-major-title">I'm a Senior Software Engineer for Android.</h1>
                                <p className="p-about-desc">
                                    A top-notch Android application developer with extensive experience in web application development, 
                                    helping businesses and companies craft their product experiences and achieve their goals.
                                </p>
                                <Spacer style={{ height: '65px' }} />
                                <div className="div-about-button-wrapper">
                                    <Button variant="primary" size="lg" className="btn-about btn-hire-me">Hire Me</Button>
                                    <Spacer style={{ width: '15px' }} />
                                    <Button variant="outline-primary" size="lg" className="btn-about btn-download-cv">Download CV</Button>
                                </div>
                            </Col>
                            <Col lg={5} md={6} sm={0}>
                                <Image src={NormanAboutPhoto} className="img-about-photo" />
                            </Col>
                        </Row>
                    </div>
                    <div className="div-about-responsive-mobile">
                        <Image src={NormanAboutPhoto} className="img-about-photo-responsive" />
                        <div className="div-about-details-overlay">
                            <div className="div-about-details-wrapper">
                                <h3 className="h2-sub-title">Hello! I am Norman Palisoc</h3>
                                <h1 className="h1-major-title">I'm a Senior Software Engineer for Android.</h1>
                                <p className="p-about-desc">
                                    A top-notch Android application developer with extensive experience in web application development, 
                                    helping businesses and companies craft their product experiences and achieve their goals.
                                </p>
                            </div>
                            <Spacer style={{ height: '35px' }} />
                            <div className="div-about-button-wrapper" style={{ justifyContent: 'center' }}>
                                <Button variant="primary" size="lg" className="btn-about btn-hire-me">Hire Me</Button>
                                <Spacer style={{ width: '15px' }} />
                                <Button variant="outline-primary" size="lg" className="btn-about btn-download-cv">Download CV</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}