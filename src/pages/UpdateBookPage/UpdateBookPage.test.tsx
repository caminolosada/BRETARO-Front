import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import UpdateBookPage from "./UpdateBookPage";
import { booksMocks } from "../../mocks/booksMock";
import BookListPage from "../BookListPage/BookListPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import paths from "../../routers/paths/paths";

describe("Given an UpdateBookPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'What do you want to edit?'", () => {
      const expectedTitle = "What do you want to edit?";

      renderWithProviders(wrapWithRouter(<UpdateBookPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is a book titled 'El desorden que dejas' at the store", () => {
    test("Then the title 'El desorden que dejas' should appear inside the title input", () => {
      const titleLabel = "Title";
      const expectedInputValue = booksMocks[0].title;

      renderWithProviders(wrapWithRouter(<UpdateBookPage />), {
        books: {
          booksData: booksMocks,
          selectedBook: booksMocks[0],
        },
      });

      const titleInput = screen.getByLabelText(titleLabel);
      expect(titleInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user modifies the title of a book and clicks on Modify button", () => {
    test("Then it should navigate to home and show the heading with the text 'What is in your shelf?'", async () => {
      const expectedTitle = "What is in your shelf?";
      const titleLabel = "Title";
      const modifiedTitle = "añskdfsdlkfgnsfdg";
      const buttonText = /Modify/i;

      const routes = [
        {
          path: "/",
          element: <UpdateBookPage />,
        },

        { path: paths.home, element: <BookListPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        books: { booksData: booksMocks, selectedBook: booksMocks[0] },
      });

      const titleInput = screen.getByLabelText(titleLabel);
      const button = screen.getByText(buttonText);

      await userEvent.type(titleInput, modifiedTitle);

      await userEvent.click(button);

      const title = screen.getByRole("heading", { name: expectedTitle });
      expect(title).toBeInTheDocument();
    });
  });
});
