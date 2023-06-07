export interface UiStateStructure {
  isLoading?: boolean;
  modalState: modalStateStructure;
}

export interface modalStateStructure {
  isVisible: boolean;
  isError: boolean;
  message: string;
}
