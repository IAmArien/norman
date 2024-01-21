import React, { PropsWithChildren } from "react";

import './css/loadingmodal.css';
import { Box, Modal, Typography } from "@mui/material";
import { ModalState, resetModalState, useAppDispatch, useAppSelector } from "../../redux";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const LoadingModal =({ children } : PropsWithChildren): React.ReactElement => {
    const { state, title, message, success } = useAppSelector(state => state.modal);
    const dispatch = useAppDispatch();
    return (
        <React.Fragment>
            <div className="div-modal-wrapper">
                {/* <div className="div-loading-modal"></div> */}
                <Modal open={state == ModalState.SHOW} onClose={() => { dispatch(resetModalState()); }}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
                </Modal>
                {children}
            </div>
        </React.Fragment>
    )
};