import { UiStateStructure } from "../store/ui/types";

export const showLoadingMock: UiStateStructure = {
  isLoading: true,
};

export const hideLoadingMock: UiStateStructure = {
  isLoading: false,
};

export const showErrorMock: UiStateStructure = {
  isError: true,
  isSuccess: false,
};

export const hideErrorMock: UiStateStructure = {
  isError: false,
  isSuccess: false,
};
