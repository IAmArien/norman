import React from "react";
import { Container } from "react-bootstrap";
import { Spacer } from "../../utils";

import './css/experience.css';

import { Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ExperienceIcon =(): React.ReactElement => {
    return (
        <React.Fragment>
            <div className="div-experience-icon">
                <FontAwesomeIcon icon={faBriefcase} className="fa-experience-icon" />
            </div>
        </React.Fragment>
    )
}

export const Experience =(): React.ReactElement => {
    const [isNovareActive, setIsNovareActive] = React.useState(true);
    const [isYonduActive, setIsYonduActive] = React.useState(false);
    const [isDSEActive, setIsDSEActive] = React.useState(false);
    const [isIngramActive, setIsIngramActive] = React.useState(false);
    const [isPhinmaActive, setIsPhinmaActive] = React.useState(false);
    return (
        <React.Fragment>
            <Spacer style={{ height: '80px' }} />
            <div id="experienceContainer">
                <Container>
                    <div id="experience">
                        <h2 className="h2-experience-title">Experience</h2>
                        <p className="p-experience-desc">Showcasing my work-related experiences as a <span className="span-highlight">Software Engineer</span> throught the years.</p>
                        <Spacer style={{ height: '20px' }} />
                        <Stepper alternativeLabel={false} orientation="vertical">
                            <Step active={isNovareActive}>
                                <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                    <div className="div-experience-position" onClick={() => setIsNovareActive(!isNovareActive)}>
                                        <div className="div-experience-title-content">
                                            <h2 className="h2-experience-company">MDI Novare | Sr. Software Engineer</h2>
                                            <p className="p-experience-duration">August 2023 - Present</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={isNovareActive ? faChevronUp : faChevronDown}
                                            className="fa-experience-toggle-icon"
                                            onClick={() => setIsNovareActive(!isNovareActive)}
                                        />
                                    </div>
                                </StepLabel>
                                <StepContent TransitionProps={{ unmountOnExit: false }}>
                                    <div className="div-experience-description">
                                        <ul className="ul-experience-descriptions">
                                            <li className="li-experience-content">Developing and Maintaining Android Application for Metrobank Investing app called Earnest using JAVA and Kotlin</li>
                                            <li className="li-experience-content">Developing new user stories and doing bug fixes for React Native Mobile Application</li>
                                            <li className="li-experience-content">Doing hotfixes, bug fixes, integrating new features, creating unit tests w/ SonarQube and JaCoCo</li>
                                            <li className="li-experience-content">Uses Microsoft Azure DevOps for Agile-Scrum methodology</li>
                                            <li className="li-experience-content">Implementing Android CI/CD with Azure Pipelines with deployment and releases to App Center</li>
                                            <li className="li-experience-content">Creating web applications using React JS and participating to team's concerns including bug fixing and developing new user stories in back-end side</li>
                                            <li className="li-experience-content">Used MVVM, traditional XML for UI layouts, and Koin DI for Android application</li>
                                        </ul>
                                    </div>
                                </StepContent>
                            </Step>
                            <Step active={isYonduActive}>
                                <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                    <div className="div-experience-position" onClick={() => setIsYonduActive(!isYonduActive)}>
                                        <div className="div-experience-title-content">
                                            <h2 className="h2-experience-company">YONDU INC. | Software Engineer (Android Kotlin)</h2>
                                            <p className="p-experience-duration">October 2022 - October 2023</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={isYonduActive ? faChevronUp : faChevronDown}
                                            className="fa-experience-toggle-icon"
                                            onClick={() => setIsYonduActive(!isYonduActive)}
                                        />
                                    </div>
                                </StepLabel>
                                <StepContent TransitionProps={{ unmountOnExit: false }}>
                                    <div className="div-experience-description">
                                        <ul className="ul-experience-descriptions">
                                            <li className="li-experience-content">Developed and Deployed Android Applications for S&R from scratch, and maintaining Unilab Postpaid Android Application.</li>
                                            <li className="li-experience-content">Lead the Android Team for entire Android Application Development and maintenance</li>
                                            <li className="li-experience-content">Used XML for building of UI, and Kotlin as the programming language</li>
                                            <li className="li-experience-content">Used MVVM, Clean Architecture, and SOLID principles</li>
                                            <li className="li-experience-content">Worked with Agile-Scrum methodology</li>
                                        </ul>
                                    </div>
                                </StepContent>
                            </Step>
                            <Step active={isDSEActive}>
                                <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                    <div className="div-experience-position" onClick={() => setIsDSEActive(!isDSEActive)}>
                                        <div className="div-experience-title-content">
                                            <h2 className="h2-experience-company">Digital Space Explorer, INC. | Android Application Developer / Consultant</h2>
                                            <p className="p-experience-duration">February 2021 - July 2023</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={isDSEActive ? faChevronUp : faChevronDown}
                                            className="fa-experience-toggle-icon"
                                            onClick={() => setIsDSEActive(!isDSEActive)}
                                        />
                                    </div>
                                </StepLabel>
                                <StepContent TransitionProps={{ unmountOnExit: false }}>
                                    <div className="div-experience-description">
                                        <ul className="ul-experience-descriptions">
                                            <li className="li-experience-content">Maintained, performed updates and hotfixes, and developed new features for the version 1 of the app</li>
                                            <li className="li-experience-content">Lead the Android Team for the ground up (upgrading version 1 of the android app into a new version in a new separate app)</li>
                                            <li className="li-experience-content">Used Jetpack Compose as the main foundation in creating UI</li>
                                            <li className="li-experience-content">Used MVVM architecture and properly implemented Clean Architecture and SOLID principles</li>
                                            <li className="li-experience-content">Performed Unit and UI tests</li>
                                            <li className="li-experience-content">Deployed and Maintained android applications in Google Play Console</li>
                                        </ul>
                                    </div>
                                </StepContent>
                            </Step>
                            <Step active={isIngramActive}>
                                <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                    <div className="div-experience-position" onClick={() => setIsIngramActive(!isIngramActive)}>
                                        <div className="div-experience-title-content">
                                            <h2 className="h2-experience-company">Ingram Micro Philippines. | Information Systems Analyst</h2>
                                            <p className="p-experience-duration">December 2019 - April 2020</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={isIngramActive ? faChevronUp : faChevronDown}
                                            className="fa-experience-toggle-icon"
                                            onClick={() => setIsIngramActive(!isIngramActive)}
                                        />
                                    </div>
                                </StepLabel>
                                <StepContent TransitionProps={{ unmountOnExit: false }}>
                                    <div className="div-experience-description">
                                        <ul className="ul-experience-descriptions">
                                            <li className="li-experience-content">Planned and designed system improvements to meet changing demands</li>
                                            <li className="li-experience-content">Worked with Oracle Database, informatica, and SSH Server File Manipulation using Unix Systems</li>
                                            <li className="li-experience-content">Created python scripts to properly monitor cron jobs running in the server</li>
                                            <li className="li-experience-content">Performed ETL (Extract, Transform, Load)</li>
                                        </ul>
                                    </div>
                                </StepContent>
                            </Step>
                            <Step active={isPhinmaActive}>
                                <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                    <div className="div-experience-position" onClick={() => setIsPhinmaActive(!isPhinmaActive)}>
                                        <div className="div-experience-title-content">
                                            <h2 className="h2-experience-company">PHINMA UPang. | Android Application Developer</h2>
                                            <p className="p-experience-duration">June 2019 - November 2019</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={isPhinmaActive ? faChevronUp : faChevronDown}
                                            className="fa-experience-toggle-icon"
                                            onClick={() => setIsPhinmaActive(!isPhinmaActive)}
                                        />
                                    </div>
                                </StepLabel>
                                <StepContent TransitionProps={{ unmountOnExit: false }}>
                                    <div className="div-experience-description padd-left width-dec">
                                        <ul className="ul-experience-descriptions">
                                            <li className="li-experience-content">Created an Android Application for recording class records in the university using JAVA and Kotlin, and XML for layout design pattern</li>
                                            <li className="li-experience-content">Collaborated with IT Faculties and University President for the changes and revisions</li>
                                            <li className="li-experience-content">Integrated API frameworks including Volley and Retrofit</li>
                                        </ul>
                                    </div>
                                </StepContent>
                            </Step>
                        </Stepper>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}