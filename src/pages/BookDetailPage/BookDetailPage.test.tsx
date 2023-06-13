import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BookDetailPage from "./BookDetailPage";

describe("Given a BookDetailPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a front page image with the alternative text 'frontpage'", () => {
      const expectedAlternativeText = "frontpage";

      renderWithProviders(wrapWithRouter(<BookDetailPage />));

      const frontPage = screen.getByAltText(expectedAlternativeText);

      expect(frontPage).toBeInTheDocument;
    });
  });
});
