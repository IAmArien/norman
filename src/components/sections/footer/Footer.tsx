import React from "react";

import './css/footer.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { HireType, SocialAccount, Spacer, onDownloadCVClick, onHireMeClick, onSocialAccountClick } from "../../utils";

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
                                        <li><a className="a-social-accounts" onClick={() => onSocialAccountClick(SocialAccount.Facebook)}>Facebook</a></li>
                                        <li><a className="a-social-accounts" onClick={() => onSocialAccountClick(SocialAccount.Messenger)}>Messenger</a></li>
                                        <li><a className="a-social-accounts" onClick={() => onSocialAccountClick(SocialAccount.Google)}>Gmail</a></li>
                                        <li><a className="a-social-accounts" onClick={() => onSocialAccountClick(SocialAccount.LinkedIn)}>LinkedIn</a></li>
                                        <li><a className="a-social-accounts" onClick={() => onSocialAccountClick(SocialAccount.Outlook)}>Outlook</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-links-wrapper">
                                    <h3 className="h3-social-accounts">Services</h3>
                                    <ul className="ul-service-accounts">
                                        <li><a className="a-service-accounts" onClick={() => onHireMeClick(HireType.Android)}>Android / Web App Development</a></li>
                                        <li><a className="a-service-accounts" onClick={() => onHireMeClick(HireType.Consulting)}>Consulting</a></li>
                                        <li><a className="a-service-accounts" onClick={() => onHireMeClick(HireType.Freelancing)}>Freelancing / Part Time</a></li>
                                        <li><a className="a-service-accounts" onClick={() => onHireMeClick(HireType.Contract)}>Contract-based</a></li>
                                        <li><a className="a-service-accounts" onClick={() => onHireMeClick(HireType.TechTalk)}>Tech Talk</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-links-wrapper">
                                    <h3 className="h3-social-accounts">Links</h3>
                                    <ul className="ul-service-accounts">
                                        <li><a className="a-service-accounts" id="aboutFooter">About</a></li>
                                        <li><a className="a-service-accounts" id="whatIdoFooter">What I Do</a></li>
                                        <li><a className="a-service-accounts" id="experienceFooter">Experience</a></li>
                                        <li><a className="a-service-accounts" id="projectsFooter">Projects</a></li>
                                        <li><a className="a-service-accounts" id="skillsFooter">Skills and Technologies</a></li>
                                        <li><a className="a-service-accounts" id="testimonialsFooter">Testimonials</a></li>
                                        <li><a className="a-service-accounts" id="contactFooter">Contact Us</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="div-footer-buttons">
                                    <Button variant="outline-primary" size="lg" className="btn-footer" onClick={() => onDownloadCVClick('cv')}>Download CV</Button>
                                    <Button variant="outline-primary" size="lg" className="btn-footer" onClick={() => onHireMeClick(HireType.General)}>Hire Me</Button>
                                    <Button variant="outline-primary" size="lg" className="btn-footer" onClick={() => onHireMeClick(HireType.Consulting)}>Consulting</Button>
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