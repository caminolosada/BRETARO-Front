import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { LazyBookListPage } from "../../routers/lazyComponents";
import BookListPage from "./BookListPage";
import { booksMocks } from "../../mocks/booksMock";

describe("Given a BookListPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'What is in your shelf?'", async () => {
      const expectedTitle = "What is in your shelf?";

      renderWithProviders(wrapWithRouter(<LazyBookListPage />));
      const title = await waitFor(() =>
        screen.getByRole("heading", { name: expectedTitle })
      );
      expect(title).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Load more'", () => {
      const expectedText = "Load more";

      renderWithProviders(wrapWithRouter(<BookListPage />));

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  describe("When an user clicks on 'Load more' button", () => {
    test("Then it should render the current and the new collection of books", async () => {
      const expectedText = "Load more";

      renderWithProviders(wrapWithRouter(<BookListPage />));

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      const title = screen.getByRole("heading", { name: booksMocks[7].title });

      await userEvent.click(loadMoreButton);

      expect(title).toBeInTheDocument();
    });
  });
});
