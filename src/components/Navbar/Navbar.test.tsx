import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navigation icon with a title 'home'", () => {
      const expectedTitle = "home";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const homeIcon = screen.getByRole("link", { name: expectedTitle });

      expect(homeIcon).toBeInTheDocument();
    });

    test("Then it should show a navigation icon with a title 'add book'", () => {
      const expectedTitle = "add book";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const addBookIcon = screen.getByRole("link", { name: expectedTitle });

      expect(addBookIcon).toBeInTheDocument();
    });
  });
});
