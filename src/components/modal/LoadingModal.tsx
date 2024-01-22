import React, { PropsWithChildren, useEffect } from "react";

import './css/loadingmodal.css';
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { ModalState, resetModalState, useAppDispatch, useAppSelector } from "../../redux";
import { CheckCircle, Error } from "@mui/icons-material";

const boxWrapper = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 4,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const boxContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const modalTitle = {
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    marginTop: '20px',
    textAlign: 'center',
    color: "#1C2120"
};

const modalMessage = {
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    marginTop: '10px',
    textAlign: 'center',
    color: "#1C2120"
};

const progressLoading = {
    width: "60px !important",
    height: "60px !important"
};

const progressSuccess = {
    width: "60px !important",
    height: "60px !important"
};

const progressFailure = {
    width: "60px !important",
    height: "60px !important",
    color: "#ef4444"
};

export const LoadingModal =({ children } : PropsWithChildren): React.ReactElement => {
    const { state, title, message, success, loading } = useAppSelector(state => state.modal);
    const dispatch = useAppDispatch();

    const onModalClose =() => { if (!loading) dispatch(resetModalState()); };

    useEffect(() => {
        if (success) { setTimeout(() => { dispatch(resetModalState()); }, 2000); }
    }, [success]);

    return (
        <React.Fragment>
            <div className="div-modal-wrapper">
                <Modal open={state == ModalState.SHOW} onClose={onModalClose}>
                    <Box sx={boxWrapper}>
                        { loading && (
                            <>
                                <CircularProgress sx={progressLoading} color="primary" />
                                <Box sx={boxContainer}>
                                    { title !== null && (
                                        <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                            sx={modalTitle}>
                                            {title}
                                        </Typography>
                                    ) }
                                    { message !== null && (
                                        <Typography
                                            id="modal-modal-description"
                                            sx={modalMessage}>
                                            {message}
                                        </Typography>
                                    ) }
                                </Box>
                            </>
                        ) }
                        { success ? (
                            <>
                                <CheckCircle sx={progressSuccess} color="success" />
                                <Box sx={boxContainer}>
                                    { title !== null && (
                                        <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                            sx={modalTitle}>
                                            {title}
                                        </Typography>
                                    ) }
                                    { message !== null && (
                                        <Typography
                                            id="modal-modal-description"
                                            sx={modalMessage}>
                                            {message}
                                        </Typography>
                                    ) }
                                </Box>
                            </>
                        ) : (
                            <>
                                { !loading && (
                                    <>
                                        <Error sx={progressFailure} />
                                        <Box sx={boxContainer}>
                                            { title !== null && (
                                                <Typography
                                                    id="modal-modal-title"
                                                    variant="h6"
                                                    component="h2"
                                                    sx={modalTitle}>
                                                    {title}
                                                </Typography>
                                            ) }
                                            { message !== null && (
                                                <Typography
                                                    id="modal-modal-description"
                                                    sx={modalMessage}>
                                                    {message}
                                                </Typography>
                                            ) }
                                        </Box>
                                    </>
                                ) }
                            </>
                        ) }
                    </Box>
                </Modal>
                {children}
            </div>
        </React.Fragment>
    )
};