import { UiStateStructure } from "../store/ui/types";

export const showLoadingMock: UiStateStructure = {
  isLoading: true,
};

export const hideLoadingMock: UiStateStructure = {
  isLoading: false,
};

export const showErrorMock: UiStateStructure = {
  isError: true,
};

export const hideErrorMock: UiStateStructure = {
  isError: false,
};
