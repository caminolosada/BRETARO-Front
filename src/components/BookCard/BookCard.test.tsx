import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { booksMocks } from "../../mocks/booksMock";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BookCard from "./BookCard";
import BookListPage from "../../pages/BookListPage/BookListPage";

describe("Given a BookCard component", () => {
  describe("When it receives the book 'El desorden que dejas'", () => {
    test("Then it should show the information that its author is 'Irene Vallejo'", () => {
      const expectedAuthor = booksMocks[3].author;

      renderWithProviders(
        wrapWithRouter(<BookCard bookProps={booksMocks[3]} isLazy={"lazy"} />)
      );

      const bookAuthor = screen.getByText(expectedAuthor);

      expect(bookAuthor).toBeInTheDocument;
    });

    test("Then it should show a front page image with the alternative text 'El desorden que dejas front page'", () => {
      const expectedAlternativeText = `${booksMocks[0].title} front page`;
      renderWithProviders(
        wrapWithRouter(<BookCard bookProps={booksMocks[0]} />)
      );

      const frontPage = screen.getByAltText(expectedAlternativeText);

      expect(frontPage).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a delete button with an icon with the alternative text 'delete icon'", () => {
      const expectedAlternativeText = "delete icon";
      renderWithProviders(
        wrapWithRouter(<BookCard bookProps={booksMocks[0]} />)
      );

      const deleteButton = screen.getByAltText(expectedAlternativeText);

      expect(deleteButton).toBeInTheDocument();
    });
  });

  describe("When an user clicks on the card delete button", () => {
    test("Then this card should disappear", async () => {
      const expectedCardTitle = "El desorden que dejas";

      renderWithProviders(wrapWithRouter(<BookListPage />), {
        books: {
          booksData: booksMocks,
          selectedBook: {
            author: "",
            cosmos: "",
            destination: "",
            editorial: "",
            frontPage: "",
            publicationYear: "",
            rating: 0,
            status: "read",
            title: "",
            id: "",
          },
          collection: 7,
          filter: "",
        },
      });

      const title = screen.getByRole("heading", { name: expectedCardTitle });
      const button = screen.getAllByRole("button", { name: "delete" });

      await userEvent.click(button[0]);

      expect(title).not.toBeInTheDocument();
    });
  });
});
