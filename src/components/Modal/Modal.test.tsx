import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";
import modalData from "./modalData";

describe("Given a Modal component", () => {
  describe("When it receives a positive feedback and is rendered", () => {
    test("Then it should show the message 'Good!' inside", () => {
      const expectedMessage = modalData.feedback.ok;

      renderWithProviders(
        wrapWithRouter(
          <Modal
            className={modalData.className.ok}
            feedback={modalData.feedback.ok}
            message={modalData.message.okDeleted}
            icon={modalData.icon.ok}
          />
        )
      );
      const modal = screen.getByText(expectedMessage);

      expect(modal).toBeInTheDocument();
    });
  });
});
