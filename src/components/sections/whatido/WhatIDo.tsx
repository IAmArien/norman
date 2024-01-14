import React from "react";

import "./css/whatido.css";

import { Col, Container, Row } from "react-bootstrap";
import { Spacer } from "../../utils";
import { faAndroid, faReact, faJava, faNode, faPhp, faJs, faMicrosoft, faJenkins, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatIDo =(): React.ReactElement => {
    return (
        <React.Fragment>
            <div id="whatIdoContainer">
                <Container>
                    <Spacer style={{ height: '80px' }} />
                    <div id="whatIdo">
                        <h2 className="h2-whatIdo-title">What I do?</h2>
                        <p className="p-whatIdo-desc">
                            I create mobile applications for <span className="span-highlight">Android</span>, both native and hybrid, along with <span className="span-highlight">Web</span> applications tailored to meet specific business requirements.
                        </p>
                        <Spacer style={{ height: '5px' }} />
                        <Row>
                            <Col lg={4} md={6} sm={12} className="pad-top-wid">
                                <div className="div-whatIdo-card">
                                    <div className="div-whatIdo-icon-container">
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faAndroid} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faReact} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faJava} className="fa-whatIdo-icon" />
                                        </div>
                                    </div>
                                    <h3 className="h3-whatIdo-card-title">Android Applications</h3>
                                    <p className="p-whatIdo-card-desc">
                                        I develop and deploy android applications using JAVA, Kotlin, React Native, XML and Jetpack Compose. Implementing MVVM, MVC, 
                                        Clean Architecture, and SOLID Principles.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="pad-top-wid">
                                <div className="div-whatIdo-card">
                                    <div className="div-whatIdo-icon-container">
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faReact} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faNode} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faPhp} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faJs} className="fa-whatIdo-icon" />
                                        </div>
                                    </div>
                                    <h3 className="h3-whatIdo-card-title">Web Applications</h3>
                                    <p className="p-whatIdo-card-desc">
                                        I develop and deploy web applications for both front-end and back-end using React JS, Express JS, React Redux, Sequelize ORM, 
                                        MySQL, and PHP.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="pad-top-wid">
                                <div className="div-whatIdo-card">
                                    <div className="div-whatIdo-icon-container">
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faMicrosoft} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faJenkins} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faGitAlt} className="fa-whatIdo-icon" />
                                        </div>
                                    </div>
                                    <h3 className="h3-whatIdo-card-title">CI/CD and DevOps</h3>
                                    <p className="p-whatIdo-card-desc">
                                        I integrate Continuous Integration / Continuous Delivery for Android Applications using MS Azure Pipelines, Azure DevOps, 
                                        and Gitlab CI.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}