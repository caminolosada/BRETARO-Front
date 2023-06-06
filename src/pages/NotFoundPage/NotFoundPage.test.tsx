import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LazyNotFoundPage } from "../../routers/lazyComponents";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Page not found'", async () => {
      const expectedTitle = "Page not found";

      renderWithProviders(wrapWithRouter(<LazyNotFoundPage />));

      const title = await waitFor(() =>
        screen.getByRole("heading", { name: expectedTitle })
      );

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Back home' button", () => {
    test("Then it should disappear", async () => {
      const expectedTitle = "Page not found";
      const expectedLabeltext = "back home";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const title = screen.getByText(expectedTitle);
      const button = screen.getByLabelText(expectedLabeltext);
      await userEvent.click(button);

      expect(title).not.toBeInTheDocument();
    });
  });
});
