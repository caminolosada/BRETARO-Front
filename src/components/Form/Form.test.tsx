import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";
import { booksMocks, createdBookMock } from "../../mocks/booksMock";

const mockFunction = vi.fn();

describe("Given a Form component", () => {
  const labelNames = [
    "URL frontpage image",
    "Title",
    "Author",
    "Publication year",
    "Editorial",
    "Choose status",
    "Valoration (1-5)",
    "Choose destination",
    "I would like to remember...",
  ];
  describe("When it is rendered", () => {
    test("Then it should show the fields 'URL frontpage image', 'Title', 'Author', 'Publication year', 'Editorial', 'Choose status', 'Valoration (1-5)', 'Choose destination'and 'I would like to remember...'", () => {
      renderWithProviders(<Form onSubmit={mockFunction} />);

      labelNames.forEach((labelName) => {
        const field = screen.getByLabelText(labelName);
        expect(field).toBeInTheDocument();
      });
    });
    test("Then it should show a button dissabled with the text 'Add book' inside", () => {
      const expectedText = "Add book";

      renderWithProviders(<Form onSubmit={mockFunction} />);

      const button = screen.getByText(expectedText);

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and all its fields are completed", () => {
    test("Then button 'Add book' should be enabled", async () => {
      renderWithProviders(<Form onSubmit={mockFunction} />);

      const urlInput = screen.getByLabelText(labelNames[0]);
      const titleInput = screen.getByLabelText(labelNames[1]);
      const authorInput = screen.getByLabelText(labelNames[2]);
      const publicationYearInput = screen.getByLabelText(labelNames[3]);
      const editorialInput = screen.getByLabelText(labelNames[4]);
      const statusInput = screen.getByLabelText(labelNames[5]);
      const valorationInput = screen.getByLabelText(labelNames[6]);
      const destinationInput = screen.getByLabelText(labelNames[7]);
      const cosmosInput = screen.getByLabelText(labelNames[8]);

      const buttonName = "Add book";

      const url = createdBookMock.frontPage;
      const title = createdBookMock.title;
      const author = createdBookMock.author;
      const publicationYear = createdBookMock.publicationYear;
      const editorial = createdBookMock.editorial;
      const valoration = createdBookMock.rating;
      const cosmos = createdBookMock.cosmos;

      await userEvent.type(urlInput, url);
      await userEvent.type(titleInput, title);
      await userEvent.type(authorInput, author);
      await userEvent.type(publicationYearInput, publicationYear);
      await userEvent.type(editorialInput, editorial);
      await userEvent.selectOptions(statusInput, ["Read"]);
      await userEvent.selectOptions(statusInput, ["Unread"]);
      await userEvent.type(valorationInput, valoration.toString());
      await userEvent.selectOptions(destinationInput, ["Keep"]);
      await userEvent.selectOptions(destinationInput, ["Borrowed"]);
      await userEvent.selectOptions(destinationInput, ["Get rid"]);
      await userEvent.type(cosmosInput, cosmos);

      const button = screen.getByText(buttonName);

      expect(button).toBeEnabled();
    });
  });

  describe("When it is rendered and receives book data, as the title 'El desorden que dejas' and the editorial 'Espasa'", () => {
    test("Then it should show the book title and editorial on the corresponding inputs", () => {
      const bookData = booksMocks[0];
      renderWithProviders(<Form onSubmit={mockFunction} book={bookData} />);

      const titleInput = screen.getByLabelText(labelNames[1]);
      const editorialInput = screen.getByLabelText(labelNames[4]);

      expect(titleInput).toHaveValue(bookData.title);
      expect(editorialInput).toHaveValue(bookData.editorial);
    });
  });
});
