import { hideLoadingMock, showLoadingMock } from "../../mocks/uiMocks";
import {
  UiStateStructure,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it is called with a showLoading action", () => {
    test("Then it should return a new state with isLoading set to true", () => {
      const currentUiState: UiStateStructure = hideLoadingMock;

      const expectedUiState: UiStateStructure = showLoadingMock;

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
