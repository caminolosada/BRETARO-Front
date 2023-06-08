import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddBookPage from "./AddBookPage";

describe("Given a AddBookPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Something new to add in your shelve?'", () => {
      const expectedTitle = "Something new to add in your shelve?";

      renderWithProviders(wrapWithRouter(<AddBookPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
