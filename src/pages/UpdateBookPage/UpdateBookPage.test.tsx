import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import UpdateBookPage from "./UpdateBookPage";

describe("Given an UpdateBookPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'What do you want to edit?'", () => {
      const expectedTitle = "What do you want to edit?";

      renderWithProviders(wrapWithRouter(<UpdateBookPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
