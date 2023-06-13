import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BookDetailPage from "./BookDetailPage";
import { addedBookMock } from "../../mocks/booksMock";

describe("Given a BookDetailPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a front page image with the alternative text 'frontpage'", () => {
      const expectedAlternativeText = "frontpage";

      renderWithProviders(wrapWithRouter(<BookDetailPage />));

      const frontPage = screen.getByAltText(expectedAlternativeText);

      expect(frontPage).toBeInTheDocument;
    });
  });
  describe("When it is rendered with the status property as false", () => {
    test("Then it should show the text 'Unread'", () => {
      const expectedText = "Unread";

      renderWithProviders(wrapWithRouter(<BookDetailPage />), {
        books: {
          booksData: [{ ...addedBookMock, status: true }],
          selectedBook: addedBookMock,
        },
      });

      const text = screen.getByText(expectedText);
      screen.debug();
      expect(text).toBeInTheDocument;
    });
  });
});
