import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BookDetailPage from "./BookDetailPage";
import { addedBookMock, booksMocks } from "../../mocks/booksMock";
import paths from "../../routers/paths/paths";
import UpdateBookPage from "../UpdateBookPage/UpdateBookPage";

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

      expect(text).toBeInTheDocument;
    });
  });
  describe("When an user clicks on the Modify button", () => {
    test("Then it should navigate to the UpdateBookPage, whose title is 'What do you want to edit?'", async () => {
      const expectedPageTitle = "What do you want to edit?";
      const buttonText = "Modify";

      const routes = [
        {
          path: paths.detail,
          element: <BookDetailPage />,
        },

        {
          path: "/",
          element: <UpdateBookPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const modifyButton = screen.getByText(buttonText);
      await userEvent.click(modifyButton);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });
      expect(pageTitle).toBeInTheDocument();
    });
    test("Then it should navigate to the UpdateBookPage and this button should disapear", async () => {
      const buttonText = "Modify";

      renderWithProviders(wrapWithRouter(<BookDetailPage />), {
        books: { booksData: booksMocks, selectedBook: booksMocks[0] },
      });
      const button = screen.getByText(buttonText);

      await userEvent.click(button);
      expect(button).not.toBeInTheDocument();
    });
  });
});
