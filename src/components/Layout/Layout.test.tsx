import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import modalData from "../Modal/modalData";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Bretaro logo with the alternative text 'bretaro logo'", () => {
      const expectedAlternativeText = "bretaro logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const bretaroLogo = screen.getByRole("img", {
        name: expectedAlternativeText,
      });

      expect(bretaroLogo).toBeInTheDocument();
    });

    test("Then it should show a navigation bar with an icon with a title 'home'", () => {
      const expectedTitle = "home";

      renderWithProviders(wrapWithRouter(<Layout />));

      const homeIcon = screen.getByRole("link", { name: expectedTitle });

      expect(homeIcon).toBeInTheDocument();
    });

    test("Then it should show a navigation bar with an icon with a title 'add book'", () => {
      const expectedTitle = "add book";

      renderWithProviders(wrapWithRouter(<Layout />));

      const addBookIcon = screen.getByRole("link", { name: expectedTitle });

      expect(addBookIcon).toBeInTheDocument();
    });
  });

  describe("When a page is loading", () => {
    test("Then it should show an spinner animation with the name 'loader animation'", () => {
      const expectedName = "loader animation";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: true,
          modalState: { isError: false, isVisible: false, message: "" },
        },
      });

      const loader = screen.getByLabelText(expectedName);

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it receives isError and isVisible seted true and the message 'Can't get books' from the store", () => {
    test("Then it should show a feedback element with the message 'Can't get books' inside", () => {
      const expectedMessage = modalData.message.errorBooks;

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: false,
          modalState: {
            isVisible: true,
            isError: true,
            message: expectedMessage,
          },
        },
      });

      const message = screen.getByText(expectedMessage);

      expect(message).toBeInTheDocument();
    });
  });

  describe("When renders a feedback Modal and an user clicks on the close button", () => {
    test("Then it should disappear", async () => {
      const expectedAlternativeText = "modal icon";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: false,
          modalState: {
            isVisible: true,
            isError: true,
            message: modalData.message.errorBooks,
          },
        },
      });

      const icon = screen.getByAltText(expectedAlternativeText);

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(icon).not.toBeInTheDocument();
    });
  });
});
