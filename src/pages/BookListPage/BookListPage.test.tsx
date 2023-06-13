import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BookListPage from "./BookListPage";
import { LazyBookListPage } from "../../routers/lazyComponents";

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

    test("Then it should show a button with the text 'Load more' inside", () => {
      const expectedText = "Load more";

      renderWithProviders(wrapWithRouter(<BookListPage />));

      const loadMoreButton = screen.getByText(expectedText);

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
});
