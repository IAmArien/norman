import React from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import './css/header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Header =(): React.ReactElement => {
    return (
        <React.Fragment>
            <Navbar expand='lg' fixed='top' className='justify-content-between nav-bg-light nav-header-container'>
                <Container>
                    <Navbar.Brand>
                        <Nav.Link href="./" className="nav-brand">NORMAN</Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="nav-menu-items">
                            <Nav.Item>
                                <Nav.Link id="aboutNav" className="auto-padder" href="#about"><span id="about" className="nav-span active">About</span></Nav.Link>
                                <div className='nav-hover active'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="whatIdoNav" className="auto-padder" href="#whatIdo"><span id="whatIdo" className="nav-span">What I do</span></Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="experienceNav" className="auto-padder" href="#experience"><span id="experience" className="nav-span">Experience</span></Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="projectsNav" className="auto-padder" href="#projects"><span id="projects" className="nav-span">Projects</span></Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="moreNav" className="auto-padder" href="#more">
                                    <span id="more" className="nav-span">More</span>&nbsp;&nbsp;&nbsp;
                                    <span id="moreDropdown" className="nav-span">
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                    <div className='div-more-extra-menu'>
                                        <Nav.Item className='nav-more-items' id='nav-more'>
                                            <Nav.Link className='nav-more-item' href='#skills'>Skills and Technologies</Nav.Link>
                                            <Nav.Link className='nav-more-item' href='#testimonials'>Testimonials</Nav.Link>
                                            <Nav.Link className='nav-more-item' href='#contact'>Contact Us</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                </Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="primary" size="sm" className="nav-btn nav-btn-download">Download</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}