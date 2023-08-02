import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddBookPage from "./AddBookPage";
import { createdBookMock } from "../../mocks/booksMock";
import modalData from "../../components/Modal/modalData";
import { store } from "../../store";

describe("Given an AddBookPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Something new to add in your shelve?'", () => {
      const expectedTitle = "Something new to add in your shelve?";

      renderWithProviders(wrapWithRouter(<AddBookPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When a user adds a new book", () => {
    test("Then it should appears the feedback message 'You have a new book on your shelf'", async () => {
      const expectedMessage = modalData.message.okAdd;

      renderWithProviders(wrapWithRouter(<AddBookPage />));

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
      const button = screen.getByText(buttonName);

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
      await userEvent.type(valorationInput, valoration.toString());
      await userEvent.selectOptions(destinationInput, ["Keep"]);
      await userEvent.type(cosmosInput, cosmos);
      await userEvent.click(button);

      const message = store.getState().ui.modalState.message;

      expect(message).toBe(expectedMessage);
    });
  });
});
