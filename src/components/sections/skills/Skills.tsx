import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import './css/skills.css';
import { Spacer } from "../../utils";

import skillsMobileCover from '../../../assets/images/skills_mobile_cover.png';
import skillsWebCover from '../../../assets/images/skills_web_cover.png';
import skillsCICDCover from '../../../assets/images/skills_cicd_cover.png';

const mobileSkills = [
    "JAVA & Kotlin",
    "XML & Jetpack Compose",
    "React Native",
    "Android Studio",
    "SDK & JDK",
    "MVVM & MVC",
    "Android Jetpack",
    "Clean Architecture",
    "SOLID",
    "Dagger 2 | Hilt",
    "Retrofit",
    "Volley",
    "Google Firebase",
    "React Redux",
    "TypeScript",
    "Nativewind",
    "Google Play Console",
    "Unit Testing",
    "JaCoCo"
]

const webSkills = [
    "React JS",
    "Express JS",
    "Node JS",
    "PHP",
    "Sequelize ORM",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "JQuery",
    "Tailwind",
    "Bootstrap",
    "Unit Testing",
    "Firebase Firestore",
    "React Redux",
    "AJAX",
    "REST APIs",
    "Shopify"
]

const cicdDevOps = [
    "Microsoft Azure",
    "Azure DevOps",
    "CI/CD",
    "Gitlab CI",
    "Azure Pipelines",
    "App Center",
    "Git",
    "Virtual Machine Scale Sets",
    "VMWares",
    "JIRA",
    "Azure Boards",
    "Ubuntu & Linux",
    "Google Cloud Platform",
    "SonarQube",
    "SonarCloud"
]

export const Skills =(): React.ReactElement => {
    return (
        <React.Fragment>
            <div className="skills-content-wrapper">
                <Spacer style={{ height: '60px' }} />
                <Container>
                    <div id="skills">
                        <h2 className="h2-skills-title">Skills and Technologies</h2>
                        <p className="p-skills-desc">
                            Programming Languages, Tools, Development Technologies, and other things that <span className="span-highlight">I know</span> and <span className="span-highlight">familiar</span> with.
                        </p>
                        <Row>
                            <Col lg={4} md={4} sm={12} className="pad-top">
                                <div className="div-skills-card">
                                    <Image className="img-skills-cover" alt={skillsMobileCover} src={skillsMobileCover} />
                                    <Spacer style={{ height: '20px' }} />
                                    <h3 className="h3-skills-card-title">Mobile Application Development</h3>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="div-skills-items">
                                        { mobileSkills.map((skills, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Button className="btn-skills-item" variant="outline-primary" size="sm">{skills}</Button>
                                                </React.Fragment>
                                            )
                                        }) }
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} className="pad-top">
                                <div className="div-skills-card">
                                    <Image className="img-skills-cover" alt={skillsWebCover} src={skillsWebCover} />
                                    <Spacer style={{ height: '20px' }} />
                                    <h3 className="h3-skills-card-title">Web Application Development</h3>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="div-skills-items">
                                        { webSkills.map((skills, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Button className="btn-skills-item" variant="outline-primary" size="sm">{skills}</Button>
                                                </React.Fragment>
                                            )
                                        }) }
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} className="pad-top">
                                <div className="div-skills-card">
                                    <Image className="img-skills-cover" alt={skillsCICDCover} src={skillsCICDCover} />
                                    <Spacer style={{ height: '20px' }} />
                                    <h3 className="h3-skills-card-title">CI/CD and DevOps</h3>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="div-skills-items">
                                        { cicdDevOps.map((skills, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Button className="btn-skills-item" variant="outline-primary" size="sm">{skills}</Button>
                                                </React.Fragment>
                                            )
                                        }) }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}