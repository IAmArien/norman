import React from "react";

import './css/projects.css';
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Spacer } from "../../utils";

function ExampleCarouselImage({ text }: any) {
    return (
        <div style={{ width: '100%', height: '200px' }}>
            <h2 style={{ color: '#FFFFFF' }}>{text}</h2>
        </div>
    )
}

function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


const ProjectCarousel =(): React.ReactElement => {
    return (
        <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '450px', display: 'flex', justifyContent: 'space-between' }}>
                        <Image
                            style={{ flex: 1, marginRight: '2px' }}
                            src="https://play-lh.googleusercontent.com/DOO2lwZAO9pYHQfoU4dOFlskd4S1WooTw_VqJfR4-KEyd1g5sQbQYQ2zqkYlTg1wWdnW=w1052-h592-rw"
                        />
                        <Image
                            style={{ flex: 1, marginLeft: '2px' }}
                            src="https://play-lh.googleusercontent.com/Jy7TYKC43NBMOrwxNT5X6FOOnHLocFUcJRvnetxhuX4VAKKTFunshW4PsX9f8JBpnA=w1052-h592-rw"
                        />
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '450px', display: 'flex', justifyContent: 'space-between' }}>
                        <Image
                            style={{ flex: 1, marginRight: '2px' }}
                            src="https://play-lh.googleusercontent.com/DOO2lwZAO9pYHQfoU4dOFlskd4S1WooTw_VqJfR4-KEyd1g5sQbQYQ2zqkYlTg1wWdnW=w1052-h592-rw"
                        />
                        <Image
                            style={{ flex: 1, marginLeft: '2px' }}
                            src="https://play-lh.googleusercontent.com/Jy7TYKC43NBMOrwxNT5X6FOOnHLocFUcJRvnetxhuX4VAKKTFunshW4PsX9f8JBpnA=w1052-h592-rw"
                        />
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

const ProjectCarousel1 =(): React.ReactElement => {
    return (
        <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '450px', display: 'flex', justifyContent: 'space-between' }}>
                        <Image
                            style={{ flex: 1, marginRight: '2px', objectFit: 'cover' }}
                            src="https://play-lh.googleusercontent.com/j86vtJ97SKLFIcK0247a0D5L1KT1sIRQUsBQi4cMVMjs_BfoBpPk9cl0ka8MxBFH2ow=w1052-h592-rw"
                        />
                        <Image
                            style={{ flex: 1, marginLeft: '2px', objectFit: 'cover' }}
                            src="https://play-lh.googleusercontent.com/10Yp7DpseVOegj1R9cSYRB-hS_HUXDORc4gMo1Q8n6YyrFopC0eZpPBnljvldZg3KQ=w1052-h592-rw"
                        />
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '450px', display: 'flex', justifyContent: 'space-between' }}>
                        <Image
                            style={{ flex: 1, marginRight: '2px' }}
                            src="https://play-lh.googleusercontent.com/DOO2lwZAO9pYHQfoU4dOFlskd4S1WooTw_VqJfR4-KEyd1g5sQbQYQ2zqkYlTg1wWdnW=w1052-h592-rw"
                        />
                        <Image
                            style={{ flex: 1, marginLeft: '2px' }}
                            src="https://play-lh.googleusercontent.com/Jy7TYKC43NBMOrwxNT5X6FOOnHLocFUcJRvnetxhuX4VAKKTFunshW4PsX9f8JBpnA=w1052-h592-rw"
                        />
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

export const Projects =(): React.ReactElement => {
    return (
        <React.Fragment>
            <Spacer style={{ height: '80px' }} />
            <div className="project-content-wrapper">
                <Container>
                    <div id="projects" style={{ paddingTop: '60px' }}>
                        <h2 className="h2-projects-title">Latest Projects</h2>
                        <p className="p-projects-desc">Some of the projects I've <span className="span-highlight">developed</span> and I've been <span className="span-highlight">part</span> of.</p>
                        <Spacer style={{ height: '20px' }} />
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <div className="div-projects-card">
                                    <ProjectCarousel />
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div className="div-projects-card">
                                    <ProjectCarousel1 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}