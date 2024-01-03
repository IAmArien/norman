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
    const [isYonduActive, setIsYonduActive] = React.useState(true);
    const [isDSEActive, setIsDSEActive] = React.useState(true);
    const [isIngramActive, setIsIngramActive] = React.useState(true);
    const [isPhinmaActive, setIsPhinmaActive] = React.useState(true);
    return (
        <React.Fragment>
            <Spacer style={{ height: '80px' }} />
            <Container>
                <div id="experience">
                    <h2 className="h2-experience-title">Experience</h2>
                    <p className="p-experience-desc">Showcasing my work-related experiences as a <span className="span-highlight">Software Engineer</span> throught the years.</p>
                    <Spacer style={{ height: '20px' }} />
                    <Stepper alternativeLabel={false} orientation="vertical">
                        <Step active={isNovareActive}>
                            <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                <div className="div-experience-position current-employer">
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
                                    <p className="p-experience-content">
                                        - Developing and Maintaining Android Application for Metrobank Investing app called Earnest using JAVA and Kotlin<br/>
                                        - Developing new user stories and doing bug fixes for React Native Mobile Application<br/>
                                        - Doing hotfixes, bug fixes, integrating new features, creating unit tests w/ SonarQube and JaCoCo<br/>
                                        - Uses Microsoft Azure DevOps for Agile-Scrum methodology<br/>
                                        - Implementing Android CI/CD with Azure Pipelines with deployment and releases to App Center<br/>
                                        - Creating web applications using React JS and participating to team's concerns including bug fixing and developing new user stories in back-end side<br/>
                                        - Used MVVM, traditional XML for UI layouts, and Koin DI for Android application<br/>
                                    </p>
                                </div>
                            </StepContent>
                        </Step>
                        <Step active={isYonduActive}>
                            <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                <div className="div-experience-position">
                                    <div className="div-experience-title-content">
                                        <h2 className="h2-experience-company">YONDU INC. | Software Engineer (Android Kotlin)</h2>
                                        <p className="p-experience-duration">October 2022 - October 2023</p>
                                    </div>
                                    <FontAwesomeIcon icon={isYonduActive ? faChevronUp : faChevronDown} className="fa-experience-toggle-icon" onClick={() => setIsYonduActive(!isYonduActive)}/>
                                </div>
                            </StepLabel>
                            <StepContent TransitionProps={{ unmountOnExit: false }}>
                                <div className="div-experience-description">
                                    <p className="p-experience-content">
                                        - Developed and Deployed Android Applications for S&R from scratch, and maintaining Unilab Postpaid Android Application.<br/>
                                        - Lead the Android Team for entire Android Application Development and maintenance<br/>
                                        - Used XML for building of UI, and Kotlin as the programming language<br/>
                                        - Used MVVM, Clean Architecture, and SOLID principles<br/>
                                        - Worked with Agile-Scrum methodology
                                    </p>
                                </div>
                            </StepContent>
                        </Step>
                        <Step active={isDSEActive}>
                            <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                <div className="div-experience-position">
                                    <div className="div-experience-title-content">
                                        <h2 className="h2-experience-company">Digital Space Explorer, INC. | Android Application Developer / Consultant</h2>
                                        <p className="p-experience-duration">February 2021 - July 2023</p>
                                    </div>
                                    <FontAwesomeIcon icon={isDSEActive ? faChevronUp : faChevronDown} className="fa-experience-toggle-icon" onClick={() => setIsDSEActive(!isDSEActive)}/>
                                </div>
                            </StepLabel>
                            <StepContent TransitionProps={{ unmountOnExit: false }}>
                                <div className="div-experience-description">
                                    <p className="p-experience-content">
                                        - Maintained, performed updates and hotfixes, and developed new features for the version 1 of the app<br/>
                                        - Lead the Android Team for the ground up (upgrading version 1 of the android app into a new version in a new separate app)<br/>
                                        - Used Jetpack Compose as the main foundation in creating UI<br/>
                                        - Used MVVM architecture and properly implemented Clean Architecture and SOLID principles<br/>
                                        - Performed Unit and UI tests<br/>
                                        - Deployed and Maintained android applications in Google Play Console
                                    </p>
                                </div>
                            </StepContent>
                        </Step>
                        <Step active={isIngramActive}>
                            <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                <div className="div-experience-position">
                                    <div className="div-experience-title-content">
                                        <h2 className="h2-experience-company">Ingram Micro Philippines. | Information Systems Analyst</h2>
                                        <p className="p-experience-duration">December 2019 - April 2020</p>
                                    </div>
                                    <FontAwesomeIcon icon={isIngramActive ? faChevronUp : faChevronDown} className="fa-experience-toggle-icon" onClick={() => setIsIngramActive(!isIngramActive)}/>
                                </div>
                            </StepLabel>
                            <StepContent TransitionProps={{ unmountOnExit: false }}>
                                <div className="div-experience-description">
                                    <p className="p-experience-content">
                                        - Planned and designed system improvements to meet changing demands<br/>
                                        - Worked with Oracle Database, informatica, and SSH Server File Manipulation using Unix Systems<br/>
                                        - Created python scripts to properly monitor cron jobs running in the server<br/>
                                        - Performed ETL (Extract, Transform, Load)
                                    </p>
                                </div>
                            </StepContent>
                        </Step>
                        <Step active={isPhinmaActive}>
                            <StepLabel StepIconComponent={() => <ExperienceIcon />}>
                                <div className="div-experience-position">
                                    <div className="div-experience-title-content">
                                        <h2 className="h2-experience-company">PHINMA UPang. | Android Application Developer</h2>
                                        <p className="p-experience-duration">June 2019 - November 2019</p>
                                    </div>
                                    <FontAwesomeIcon icon={isPhinmaActive ? faChevronUp : faChevronDown} className="fa-experience-toggle-icon" onClick={() => setIsPhinmaActive(!isPhinmaActive)}/>
                                </div>
                            </StepLabel>
                            <StepContent TransitionProps={{ unmountOnExit: false }}>
                                <div className="div-experience-description padd-left width-dec">
                                    <p className="p-experience-content">
                                        - Created an Android Application for recording class records in the university using JAVA and Kotlin, and XML for layout design pattern<br/>
                                        - Collaborated with IT Faculties and University President for the changes and revisions<br/>
                                        - Integrated API frameworks including Volley and Retrofit
                                    </p>
                                </div>
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </Container>
        </React.Fragment>
    )
}