import React from "react";

import { Worker, Viewer, SpecialZoomLevel, ViewMode, ScrollMode } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

import './css/cvdownload.css';
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

export const CVDownload =(): React.ReactElement => {
    const onDownloadCVClick =() => { }
    return (
        <React.Fragment>
            <div className="div-pdf-container-wrapper">
                <div className="div-pdf-controls-wrapper">
                    <Container>
                        <div className="div-pdf-controls">
                            <a href="/#norman" className="pdf-download-title">NORMAN</a>
                            <div className="div-pdf-btn-controls-wrapper">
                                <Button variant="outline-primary" size="sm" className="pdf-download-btn pdf-download-btn-download" onClick={() => onDownloadCVClick()}>
                                    <FontAwesomeIcon icon={faCloudDownloadAlt} />
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="div-pdf-viewer">
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl={require('../../assets/documents/norman_cv.pdf')}
                            defaultScale={SpecialZoomLevel.ActualSize}
                            enableSmoothScroll
                            viewMode={ViewMode.SinglePage}
                            scrollMode={ScrollMode.Vertical}
                        />
                    </Worker>
                </div>
            </div>
        </React.Fragment>
    )
}