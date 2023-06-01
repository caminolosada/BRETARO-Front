import { screen } from "@testing-library/react";
import { booksMocks } from "../../mocks/booksMock";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BooksList from "./BooksList";

describe("Given a BooksList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of books with one of them titled 'El desorden que dejas'", () => {
      const expectedTitle = booksMocks[0].title;

      renderWithProviders(
        wrapWithRouter(<BooksList booksProps={booksMocks} />)
      );

      const bookTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(bookTitle).toBeInTheDocument();
    });
  });
});
