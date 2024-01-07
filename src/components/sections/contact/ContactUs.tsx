import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import './css/contactus.css';
import { Spacer } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookMessenger, faGoogle, faLinkedin, faWindows } from "@fortawesome/free-brands-svg-icons";

export const ContactUs =(): React.ReactElement => {
    return (
        <React.Fragment>
            <div className="div-contact-us-wrapper">
                <Spacer style={{ height: '40px' }} />
                <Container>
                    <div id="contactUs">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="div-contact-us-details">
                                    <h2 className="h2-contact-us-title">Just Say Hi!</h2>
                                    <p className="p-contact-us-desc">
                                        I am open to discuss your next project, improve, maintain, and enhance your current mobile / web applications or 
                                        help with your technological challenges.
                                    </p>
                                    <Spacer style={{ height: '40px' }} />
                                    <h4 className="h4-email-me-at">Email me at:</h4>
                                    <p><a className="a-email" href="mailto:noco.palisoc@up.phinma.edu.ph">noco.palisoc@up.phinma.edu.ph</a></p>
                                    <Spacer style={{ height: '40px' }} />
                                    <h4 className="h4-social">Social:</h4>
                                    <div className="div-social-accounts">
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faFacebook} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faFacebookMessenger} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faGoogle} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faLinkedin} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faWindows}/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="div-contact-us-fields">
                                    <div className="form-group">
                                        <input type="text" className="form-control input-contact-us" name="name" placeholder="Your name" />
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="form-group">
                                        <input type="email" className="form-control input-contact-us" name="email" aria-describedby="emailContact" placeholder="Your email where we can reach" />
                                        <small id="emailContact" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="form-group">
                                        <input type="text" className="form-control input-contact-us" name="subject" placeholder="Subject" />
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="form-group">
                                        <textarea className="form-control text-area-contact-us" rows={4} id="textArea"></textarea>
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <Button variant="primary" size="lg" className="btn-submit-contact-us">Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Spacer style={{ height: '40px' }} />
            </div>
        </React.Fragment>
    )
}