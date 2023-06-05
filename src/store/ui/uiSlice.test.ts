import {
  hideErrorMock,
  hideLoadingMock,
  showErrorMock,
  showLoadingMock,
} from "../../mocks/uiMocks";
import { UiStateStructure } from "./types";
import {
  hideModalActionCreator,
  hideLoadingActionCreator,
  showModalActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it is called with a showLoading action", () => {
    test("Then it should return a new state with isLoading set to true", () => {
      const currentUiState: UiStateStructure = hideLoadingMock;

      const expectedUiState: UiStateStructure = showLoadingMock;

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it is called with a hideLoading action", () => {
    test("Then it should return a new state with isLoading set to false", () => {
      const currentUiState: UiStateStructure = showLoadingMock;

      const expectedUiState: UiStateStructure = hideLoadingMock;

      const newState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it is called with a showError action", () => {
    test("Then it should return a new state with isError set to true", () => {
      const currentUiState: UiStateStructure = hideErrorMock;

      const expectedUiState: UiStateStructure = showErrorMock;

      const newState = uiReducer(
        currentUiState,
        showModalActionCreator({ isError: true })
      );

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it is called with a hideError action", () => {
    test("Then it should return a new state with isError set to false", () => {
      const currentUiState: UiStateStructure = showErrorMock;

      const expectedUiState: UiStateStructure = hideErrorMock;

      const newState = uiReducer(
        currentUiState,
        hideModalActionCreator({ isError: false })
      );

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
