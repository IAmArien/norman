import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import './css/contactus.css';
import { SocialAccount, Spacer, onSocialAccountClick } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookMessenger, faGoogle, faLinkedin, faWindows } from "@fortawesome/free-brands-svg-icons";
import { ContactUsFields, postContactUsFieldsAsync } from "../../../services";
import { ModalState, displayModal, useAppDispatch } from "../../../redux";

export const ContactUs =(): React.ReactElement => {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [subject, setSubject] = React.useState<string>("");
    const [intent, setIntent] = React.useState<string>("");

    const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (name.length <= 0) {
            setButtonDisabled(true);
            return;
        }
        if (email.length <= 0) {
            setButtonDisabled(true);
            return;
        }
        if (subject.length <= 0) {
            setButtonDisabled(true);
            return;
        }
        if (intent.length <= 0) {
            setButtonDisabled(true);
            return;
        }
        setButtonDisabled(false);
    }, [name, email, subject, intent]);

    const postContactUsFields = async () => {
        dispatch(displayModal({
            state: ModalState.SHOW,
            title: null,
            message: "Sending Information, Please wait!...",
            success: false
        }));
        const fields: ContactUsFields = {
            name: name,
            email: email,
            subject: subject,
            intent: intent
        };
        await Promise.all([postContactUsFieldsAsync(fields)]).then(([response]) => {
            console.log(response.data?.data?.description);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <React.Fragment>
            <div id="contactUsContainer" className="div-contact-us-wrapper">
                <Spacer style={{ height: '40px' }} />
                <Container>
                    <div id="contactUs">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="div-contact-us-details">
                                    <h2 className="h2-contact-us-title">Just Say Hi!</h2>
                                    <p className="p-contact-us-desc">
                                        I am open to discuss your next project, improve, maintain, and enhance your current mobile / web applications or 
                                        help with your technological challenges.
                                    </p>
                                    <Spacer style={{ height: '40px' }} />
                                    <h4 className="h4-email-me-at">Email me at:</h4>
                                    <p><a className="a-email" href="mailto:noco.palisoc@up.phinma.edu.ph">noco.palisoc@up.phinma.edu.ph</a></p>
                                    <Spacer style={{ height: '40px' }} />
                                    <h4 className="h4-social">Social:</h4>
                                    <div className="div-social-accounts">
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faFacebook} onClick={() => onSocialAccountClick(SocialAccount.Facebook)} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faFacebookMessenger} onClick={() => onSocialAccountClick(SocialAccount.Messenger)} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faGoogle} onClick={() => onSocialAccountClick(SocialAccount.Google)} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faLinkedin} onClick={() => onSocialAccountClick(SocialAccount.LinkedIn)} />
                                        <FontAwesomeIcon className="fa-social-accounts" icon={faWindows} onClick={() => onSocialAccountClick(SocialAccount.Outlook)}/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="div-contact-us-fields">
                                    <div className="form-group">
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control input-contact-us" name="name" placeholder="Your name" />
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="form-group">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control input-contact-us" name="email" aria-describedby="emailContact" placeholder="Your email where we can reach" />
                                        <small id="emailContact" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="form-group">
                                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="form-control input-contact-us" name="subject" placeholder="Subject" />
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <div className="form-group">
                                        <textarea value={intent} onChange={(e) => setIntent(e.target.value)} className="form-control text-area-contact-us" rows={4} id="textArea"></textarea>
                                    </div>
                                    <Spacer style={{ height: '15px' }} />
                                    <Button disabled={buttonDisabled} variant="primary" size="lg" className="btn-submit-contact-us" onClick={postContactUsFields}>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Spacer style={{ height: '40px' }} />
            </div>
        </React.Fragment>
    )
}