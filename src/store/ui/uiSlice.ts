import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiStateStructure, modalStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
  modalState: {
    isError: false,
    isVisible: false,
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showModal: (
      currentUiState: UiStateStructure,
      action: PayloadAction<modalStateStructure>
    ) => ({
      ...currentUiState,
      modalState: {
        ...action.payload,
      },
    }),
    hideModal: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      modalState: { ...initialUiState.modalState },
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const { showModal: showModalActionCreator } = uiSlice.actions;
export const { hideModal: hideModalActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
