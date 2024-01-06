import React from "react";

import './css/projects.css';
import { Col, Container, Image, Row } from "react-bootstrap";
import { Divider, Spacer } from "../../utils";

import earnestProjectCover1 from '../../../assets/images/earnest_cover_1.png';
import earnestProjectCover2 from '../../../assets/images/earnest_cover_2.png';
import earnestProjectCover3 from '../../../assets/images/earnest_cover_3.png';

import squadzipCover1 from '../../../assets/images/squadzip_cover_1.png';
import squadzipCover2 from '../../../assets/images/squadzip_cover_2.png';

import snrShoppingCover1 from '../../../assets/images/snr_cover_1.png';
import snrShoppingCover2 from '../../../assets/images/snr_cover_2.png';
import snrShoppingCover3 from '../../../assets/images/snr_cover_3.png';

import pizzaCover1 from '../../../assets/images/pizza_cover_1.png';
import pizzaCover2 from '../../../assets/images/pizza_cover_2.png';

type ProjectCoverItemProps = {
    title: string,
    company: string,
    description: string,
    hasSeeMore: boolean,
    covers: string[],
    keyName: string
}

const ProjectCoverItem: React.FC<ProjectCoverItemProps> =(props): React.ReactElement => {
    const { title, company, description, hasSeeMore, covers, keyName } = props;
    const [selectedCover, setSelectedCover] = React.useState(covers[0]);
    const onSelectProjectCover =(cover: string, index: number): void => {
        const imageCovers = document.getElementsByClassName(keyName);
        for (var i = 0; i < imageCovers.length; i++) {
            const element = imageCovers[i];
            if (element.classList.contains("project-cover-selected")) {
                element.classList.remove("project-cover-selected");
                element.classList.add("project-cover-unselected");
            }
        }
        imageCovers[index].classList.remove("project-cover-unselected");
        imageCovers[index].classList.add("project-cover-selected");
        setSelectedCover(cover);
    }
    const descriptions = description.split("\\n");
    return (
        <React.Fragment>
            <div style={{ paddingTop: '25px', height: '100%' }}>
                <div className="div-projects-card">
                    <Image className="img-project-cover" alt="earnest-project-cover" src={selectedCover} />
                    <div className="div-projects-details">
                        <div className="div-project-covers">
                            { covers.map((value, index) => {
                                var className = `img-project-cover-list ${keyName}`;
                                if (index == 0) {
                                    className += " ";
                                    className += "project-cover-selected";
                                }
                                return (
                                    <React.Fragment key={index}>
                                        <Image
                                            className={className}
                                            alt="earnest-project-cover"
                                            src={value}
                                            onClick={() => onSelectProjectCover(value, index)}
                                        />
                                        <Spacer style={{ width: '10px' }} />
                                    </React.Fragment>
                                )
                            }) }
                        </div>
                        <Spacer style={{ height: '20px' }} />
                        <Divider style={{ width: '100%', height: '2px', backgroundColor: '#0000000F' }} />
                        <Spacer style={{ height: '20px' }} />
                        <h2 className="h2-project-title">{title}</h2>
                        <p className="p-project-owner">{company}</p>
                        <p className="p-project-description">
                            { descriptions.map((desc, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        { (index + 1) == (descriptions.length) ? desc : <>{desc}<br/></> }
                                    </React.Fragment>
                                )  
                            }) } { hasSeeMore ? (
                                <span className="span-highlight" style={{ cursor: 'pointer' }}>See More.</span>
                            ) : <></> }
                        </p>
                    </div>
                </div>
            </div>
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
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <ProjectCoverItem
                                    keyName="earnest-metrobank"
                                    title="Earnest"
                                    company="Metropolitan Bank & Trust Company (METROBANK)"
                                    description="
                                        Earnest helps you invest with confidence so you can prepare for your future.\n\n
                                        With Earnest, you can learn investing basics and stay updated with relevant news to power your decisions. 
                                        When you’re ready, you can open a Metrobank Online Time Deposit and earn up to 4.5% interest p.a., 
                                        depending on how much you put in."
                                    hasSeeMore
                                    covers={[ earnestProjectCover1, earnestProjectCover2, earnestProjectCover3 ]}
                                />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <ProjectCoverItem
                                    keyName="squadzip-dse"
                                    title="Squadzip"
                                    company="Digital Space Explorer, INC."
                                    description="
                                        Squadzip is the digital extension of the office for a growing number of remote working, customer-facing, sales, service, and operations teams. 
                                        Squadzip’s mobile application brings together the ease of use and intuitiveness found on most social media and consumer applications, 
                                        to the workplace, with the goal of delivering a productivity tool that is easy to use, configure, set up, deploy, and implement."
                                    hasSeeMore
                                    covers={[ squadzipCover1, squadzipCover2 ]}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <ProjectCoverItem
                                    keyName="snr-shopping"
                                    title="S&R Membership Shopping"
                                    company="S&R Mobile Apps"
                                    description="
                                        From the membership shopping chain that brought you the world-class shopping experience, the S&R Shopping app now brings the world right at your doorstep!\n\n
                                        Download the S&R Shopping mobile app now and enjoy these exciting deals and services!\n
                                        FREE DELIVERY FEE: For a minimum spend of ₱5,000, extra fees on delivery will be waived.\n
                                        FREE REUSABLE BAGS: Purchased items come in S&R eco bags—no extra fees either! "
                                    hasSeeMore
                                    covers={[ snrShoppingCover1, snrShoppingCover2, snrShoppingCover3 ]}
                                />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <ProjectCoverItem
                                    keyName="snr-pizza"
                                    title="S&R Pizza"
                                    company="S&R Mobile Apps"
                                    description="
                                        Now’s the time to enjoy your favorite S&R Pizza! Download S&R Pizza app today, and enjoy all the perks of ordering and delivery for FREE, plus receive 20% off for PWD & Senior Citizens!\n\n
                                        Delivery: Enjoy the convenience of our hassle-free online ordering and delivery for FREE!\n\n
                                        Discounts for PWD & Senior Citizen: Enjoy 20% off on all main course, drinks, side dish and dessert by simply uploading a photo of your PWD or Senior Citizen ID."
                                    hasSeeMore
                                    covers={[ pizzaCover1, pizzaCover2 ]}
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}