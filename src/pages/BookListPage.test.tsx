import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { LazyBookListPage } from "../routers/lazyComponents";
import modalData from "../data/modalData";
import BookListPage from "./BookListPage";

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

    describe("When it receives isError from the state", () => {
      test("Then it should show a feedback element with the message 'Can't get books inside'", () => {
        const expectedMessage = modalData.message.errorBooks;

        renderWithProviders(<BookListPage />, { ui: { isError: true } });

        const message = screen.getByText(expectedMessage);

        expect(message).toBeInTheDocument();
      });
    });

    describe("When renders an feedback Modal and a user clicks on the close button", () => {
      test("Then it should disappear", async () => {
        const expectedAlternativeText = "modal icon";

        renderWithProviders(<BookListPage />, { ui: { isError: true } });

        const icon = screen.getByAltText(expectedAlternativeText);

        const button = screen.getByRole("button");
        await userEvent.click(button);

        expect(icon).not.toBeInTheDocument();
      });
    });
  });
});
