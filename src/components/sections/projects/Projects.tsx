import React from "react";

import './css/projects.css';
import { Container } from "react-bootstrap";
import { Spacer } from "../../utils";

export const Projects =(): React.ReactElement => {
    return (
        <React.Fragment>
            <Spacer style={{ height: '80px' }} />
            <Container>
                <div id="projects">
                    <h2 className="h2-projects-title">Latest Projects</h2>
                    <p className="p-projects-desc">Some of the projects I've <span className="span-highlight">developed</span> and I've been <span className="span-highlight">part</span> of.</p>
                </div>
            </Container>
        </React.Fragment>
    )
}