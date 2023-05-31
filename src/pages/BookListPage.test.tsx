import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../utils/testUtils";
import BookListPage from "./BookListPage";

describe("Given a BookListPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'What is in your shelf?'", () => {
      const expectedTitle = "What is in your shelf?";

      renderWithProviders(wrapWithRouter(<BookListPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
