import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";

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
});
