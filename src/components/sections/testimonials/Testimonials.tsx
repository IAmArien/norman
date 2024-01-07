import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import './css/testimonials.css';
import { Spacer } from "../../utils";

import placeholderClientCover1 from '../../../assets/images/placeholder_client_cover_1.jpg';
import placeholderClientCover2 from '../../../assets/images/placeholder_client_cover_2.jpg';
import clientCover1 from '../../../assets/images/client_cover_1.png';
import clientCover2 from '../../../assets/images/client_cover_2.png';

export const Testimonials =(): React.ReactElement => {
    return (
        <React.Fragment>
            <Spacer style={{ height: '40px' }} />
            <Container>
                <div id="testimonials">
                    <h2 className="h2-testimonials-title">Kind words from excellent <span className="span-highlight">Companies</span> and <span className="span-highlight">Clients</span></h2>
                    <Spacer style={{ height: '30px' }} />
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="div-testimonials-card">
                                <p className="p-testimonials-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Praesent sed ullamcorper urna. Praesent enim tellus, placerat non 
                                    lectus et, interdum faucibus nulla. Class aptent taciti sociosqu 
                                    ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                    Nullam volutpat enim ut gravida tincidunt. Morbi vel mollis nisi, non aliquam est.
                                </p>
                                <div className="div-testimonials-client">
                                    <Image className="img-testimonials-client-profile" alt={placeholderClientCover1} src={placeholderClientCover1} />
                                    <div className="div-testimonials-client-details">
                                        <h3 className="h3-client-name">Im Nayeon</h3>
                                        <p className="p-client-position">Chief Technology Officer (CTO)</p>
                                    </div>
                                    <div className="div-testimonials-client-logo">
                                        <Image className="img-testimonials-client" alt={clientCover1} src={clientCover1} />
                                    </div>                                    
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="div-testimonials-card">
                                <p className="p-testimonials-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Praesent sed ullamcorper urna. Praesent enim tellus, placerat non 
                                    lectus et, interdum faucibus nulla. Class aptent taciti sociosqu 
                                    ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                    Nullam volutpat enim ut gravida tincidunt. Morbi vel mollis nisi, non aliquam est.
                                </p>
                                <div className="div-testimonials-client">
                                    <Image className="img-testimonials-client-profile" alt={placeholderClientCover2} src={placeholderClientCover2} />
                                    <div className="div-testimonials-client-details">
                                        <h3 className="h3-client-name">Im Nayeon</h3>
                                        <p className="p-client-position">Senior Technical Project Manager</p>
                                    </div>
                                    <div className="div-testimonials-client-logo">
                                        <Image className="img-testimonials-client" alt={clientCover2} src={clientCover2} />
                                    </div>                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Spacer style={{ height: '100px' }} />
        </React.Fragment>
    )
}