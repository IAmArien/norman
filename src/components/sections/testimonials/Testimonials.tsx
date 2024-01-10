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
                    <Spacer style={{ height: '10px' }} />
                    <Row>
                        <Col lg={6} md={6} sm={12} className="pad-top">
                            <div className="div-testimonials-card">
                                <p className="p-testimonials-desc">
                                    One of Norman's standout attributes is his ability to swiftly address and fix bugs. 
                                    His attention to detail, coupled with a remarkable score of 10/10 in this area, 
                                    ensures a seamless and bug-free user experience. 
                                    Furthermore, Norman demonstrates a remarkable capacity to communicate effectively 
                                    with the product team, facilitating a smooth exchange of ideas and requirements.
                                    <br/>
                                    <br/>
                                    It was a pleasure working alongside Norman, and his contributions significantly 
                                    elevated the quality of our Android development projects. 
                                    I highly recommend Norman as a skilled and collaborative Android Developer.
                                </p>
                                <Spacer style={{ height: '20px' }} />
                                <div className="div-testimonials-client-wrapper">
                                    <div className="div-testimonials-client">
                                        <Image className="img-testimonials-client-profile" alt={placeholderClientCover1} src={placeholderClientCover1} />
                                        <div className="div-testimonials-client-details">
                                            <h3 className="h3-client-name">Joaquin Barandino</h3>
                                            <p className="p-client-position">Chief Technology Officer (CTO) DSE</p>
                                        </div>
                                        <div className="div-testimonials-client-logo">
                                            <Image className="img-testimonials-client" alt={clientCover1} src={clientCover1} />
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pad-top">
                            <div className="div-testimonials-card">
                                <p className="p-testimonials-desc">
                                    Norman possesses an exceptional expertise in Android Development, showcasing not only 
                                    his mastery of the platform but also extending to other technologies such as GCP and Firebase. 
                                    His general knowledge about how our app can function in its respective category is unparalleled.
                                    <br/>
                                    <br/>
                                    Norman's commitment to excellence is evident in his work. His ability to address bugs promptly 
                                    and ensure timely feature delivery greatly contributed to the success of our projects. 
                                    His broad skill set, including expertise in various technologies, makes him a valuable asset to any development team.
                                </p>
                                <Spacer style={{ height: '20px' }} />
                                <div className="div-testimonials-client-wrapper">
                                    <div className="div-testimonials-client">
                                        <Image className="img-testimonials-client-profile" alt={placeholderClientCover2} src={placeholderClientCover2} />
                                        <div className="div-testimonials-client-details">
                                            <h3 className="h3-client-name">Julpril Santiago</h3>
                                            <p className="p-client-position">Project Manager S&R Membership Shopping</p>
                                        </div>
                                        <div className="div-testimonials-client-logo">
                                            <Image className="img-testimonials-client" alt={clientCover2} src={clientCover2} />
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Spacer style={{ height: '110px' }} />
        </React.Fragment>
    )
}