import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import './css/skills.css';
import { Spacer } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faReact, faJava, faNode, faPhp, faJs, faMicrosoft, faJenkins, faGitAlt } from "@fortawesome/free-brands-svg-icons";

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
    "REST APIs"
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
                            Programming Languages, Tools, Development Technologies, and other things that I know and familiar with.
                        </p>
                        <Spacer style={{ height: '20px' }} />
                        <Row>
                            <Col lg={4} md={4} sm={12}>
                                <div className="div-skills-card">
                                    <div className="div-whatIdo-icon-container">
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faAndroid} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faReact} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faJava} className="fa-whatIdo-icon" />
                                        </div>
                                    </div>
                                    <Spacer style={{ height: '20px' }} />
                                    <h3 className="h3-skills-card-title">Mobile Application Development</h3>
                                    <Spacer style={{ height: '22px' }} />
                                    { mobileSkills.map((skills, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Button className="btn-skills-item" variant="outline-primary" size="sm">{skills}</Button>&nbsp;&nbsp;
                                            </React.Fragment>
                                        )
                                    }) }
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="div-skills-card">
                                    <div className="div-whatIdo-icon-container">
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faReact} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faNode} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faPhp} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faJs} className="fa-whatIdo-icon" />
                                        </div>
                                    </div>
                                    <Spacer style={{ height: '20px' }} />
                                    <h3 className="h3-skills-card-title">Web Application Development</h3>
                                    <Spacer style={{ height: '22px' }} />
                                    { webSkills.map((skills, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Button className="btn-skills-item" variant="outline-primary" size="sm">{skills}</Button>&nbsp;&nbsp;
                                            </React.Fragment>
                                        )
                                    }) }
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="div-skills-card">
                                    <div className="div-whatIdo-icon-container">
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faMicrosoft} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faJenkins} className="fa-whatIdo-icon" />
                                        </div>
                                        <Spacer style={{ width: '10px' }} />
                                        <div className="div-whatIdo-icon-box">
                                            <FontAwesomeIcon icon={faGitAlt} className="fa-whatIdo-icon" />
                                        </div>
                                    </div>
                                    <Spacer style={{ height: '20px' }} />
                                    <h3 className="h3-skills-card-title">CI/CD and DevOps</h3>
                                    <Spacer style={{ height: '22px' }} />
                                    { cicdDevOps.map((skills, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Button className="btn-skills-item" variant="outline-primary" size="sm">{skills}</Button>&nbsp;&nbsp;
                                            </React.Fragment>
                                        )
                                    }) }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}