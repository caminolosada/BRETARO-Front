import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
  isError: false,
  isSuccess: false,
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
      action: PayloadAction<UiStateStructure>
    ) => ({
      ...currentUiState,
      isError: action.payload.isError,
      isSuccess: action.payload.isSuccess,
    }),
    hideModal: (
      currentUiState: UiStateStructure,
      action: PayloadAction<UiStateStructure>
    ) => ({
      ...currentUiState,
      isError: action.payload.isError,
      isSuccess: action.payload.isSuccess,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const { showModal: showModalActionCreator } = uiSlice.actions;
export const { hideModal: hideModalActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
