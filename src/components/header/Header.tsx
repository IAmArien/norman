import React from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import './css/header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faEnvelope, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Spacer } from "../utils";

export const Header =(): React.ReactElement => {
    const onDrawerMenuClick =(isOpen: boolean) => {
        const navSliderDrawer = document.getElementById('navSlideDrawer') as HTMLElement;
        if (isOpen) {
            navSliderDrawer.classList.remove('slide-close');
            navSliderDrawer.classList.add('slide-open');
        } else {
            navSliderDrawer.classList.remove('slide-open');
            navSliderDrawer.classList.add('slide-close');
        }
    }
    const onDownloadCVClick =() => { window.location.href = '/norman/cv'; }
    return (
        <React.Fragment>
            <Navbar expand='lg' fixed='top' className='justify-content-between nav-bg-light nav-header-container'>
                <div className="nav-slider-drawer slide-close" id="navSlideDrawer">
                    <h1 className="nav-brand-logo-slider">NORMAN</h1>
                    <div className="div-close-drawer-icon-wrapper">
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="fa-close-drawer-icon"
                            onClick={() => onDrawerMenuClick(false)}
                        />
                        <Spacer style={{ width: '15px' }} />
                    </div>
                    <Nav className="nav-slider-menu">
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item" href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item" href="#whatIdo">What I Do</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item" href="#experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item" href="#projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item" href="#more">More</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item sub-menu" href="#skills">Skills and Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item sub-menu" href="#testimonials">Testimonials</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Nav.Link className="nav-slider-menu-item sub-menu" href="#contactus">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-slider-item">
                            <Button variant="primary" size="lg" className="nav-btn nav-btn-download responsive" onClick={() => onDownloadCVClick()}>Download CV</Button>
                        </Nav.Item>
                    </Nav>
                </div>
                <Container>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="img-toggle-icon"
                        onClick={() => onDrawerMenuClick(true)}
                    />
                    <Navbar.Brand>
                        <Nav.Link href="./norman" className="nav-brand">NORMAN</Nav.Link>
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
                                <Button variant="primary" size="sm" className="nav-btn nav-btn-download" onClick={() => onDownloadCVClick()}>Download</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="div-contact-mobile-wrapper">
                        <FontAwesomeIcon icon={faPhone} className="img-contact-collapsed-icon" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faEnvelope} className="img-contact-collapsed-icon" />
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}