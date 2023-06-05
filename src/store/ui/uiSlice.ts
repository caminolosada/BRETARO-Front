import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
  isError: false,
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
    showError: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isError: true,
    }),
    hideError: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isError: false,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const { showError: showErrorActionCreator } = uiSlice.actions;
export const { hideError: hideErrorActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
