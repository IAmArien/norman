import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalState { SHOW, HIDE };

interface DisplayModalState {
    state: ModalState | ModalState.SHOW | ModalState.HIDE;
    title?: string | null;
    message?: string | null;
    success: boolean | false;
    loading: boolean | false;
};

type DisplayModalAction = {
    state: ModalState | ModalState.SHOW | ModalState.HIDE;
    title?: string | null;
    message?: string | null;
    success: boolean | false;
    loading: boolean | false;
}

const DisplayModalInitialState: DisplayModalState = {
    state: ModalState.HIDE,
    title: null,
    message: null,
    success: false,
    loading: false
};

const DisplayModalSlice = createSlice({
    name: 'DisplayModal',
    initialState: DisplayModalInitialState,
    reducers: {
        displayModal: (state, action: PayloadAction<DisplayModalAction>) => {
            state.state = action.payload.state;
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.success = action.payload.success;
            state.loading = action.payload.loading;
        },
        resetModalState: () => DisplayModalInitialState
    }
});

export const { displayModal, resetModalState } = DisplayModalSlice.actions;

export default DisplayModalSlice.reducer;