import { screen, waitFor } from "@testing-library/react";
import { LazyBookListPage } from "../../routers/lazyComponents";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

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
  });
});
