import { UiStateStructure } from "../store/ui/types";

export const showLoadingMock: UiStateStructure = {
  isLoading: true,
  modalState: {
    isError: false,
    isVisible: false,
    message: "",
  },
};

export const hideLoadingMock: UiStateStructure = {
  isLoading: false,
  modalState: { ...showLoadingMock.modalState },
};

export const showModal: UiStateStructure = {
  isLoading: false,
  modalState: {
    isError: false,
    isVisible: true,
    message: "",
  },
};

export const hideModal: UiStateStructure = {
  isLoading: false,
  modalState: {
    isError: false,
    isVisible: false,
    message: "",
  },
};
