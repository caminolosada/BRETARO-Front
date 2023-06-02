import { screen } from "@testing-library/react";
import { booksMocks } from "../../mocks/booksMock";
import { renderWithProviders } from "../../utils/testUtils";
import BookCard from "./BookCard";

beforeEach(() => {
  renderWithProviders(<BookCard bookProps={booksMocks[0]} />);
});

describe("Given a BookCard component", () => {
  describe("When it receives the book 'El desorden que dejas'", () => {
    test("Then it should show the information that its author is 'Carlos Montero'", () => {
      const expectedAuthor = booksMocks[0].author;

      const bookAuthor = screen.getByText(expectedAuthor);

      expect(bookAuthor).toBeInTheDocument;
    });

    test("Then it should show a front page image with the alternative text 'El desorden que dejas front page'", () => {
      const expectedAlternativeText = `${booksMocks[0].title} front page`;

      const frontPage = screen.getByAltText(expectedAlternativeText);

      expect(frontPage).toBeInTheDocument();
    });
  });
});
