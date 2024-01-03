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
                                <Nav.Link id="about" className="auto-padder active" href="#about">About</Nav.Link>
                                <div className='nav-hover active'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="whatIdo" className="auto-padder" href="#whatIdo">What I do</Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="experience" className="auto-padder" href="#experience">Experience</Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="projects" className="auto-padder" href="#projects">Projects</Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="more" className="auto-padder" href="#more">
                                    More&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronDown} />
                                </Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="primary" size="lg" className="nav-btn nav-btn-download">Download</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}