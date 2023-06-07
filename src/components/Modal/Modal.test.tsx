import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";
import modalData from "./modalData";

describe("Given a Modal component", () => {
  describe("When it receives a positive feedback and is rendered", () => {
    test("Then it should show the message 'You have a new book on your shelf' inside", () => {
      const expectedMessage = modalData.message.okAdd;
      const isError = false;

      renderWithProviders(
        wrapWithRouter(<Modal isError={isError} message={expectedMessage} />)
      );
      const modal = screen.getByText(expectedMessage);

      expect(modal).toBeInTheDocument();
    });
  });
});
