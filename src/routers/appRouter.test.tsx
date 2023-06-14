import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given an appRouter", () => {
  describe("When it redirects to the home page", () => {
    test("Then it should render a header with the Bretaro logo", () => {
      const expectedAlternativeText = "bretaro logo";
      renderWithProviders(<RouterProvider router={appRouter} />);

      const bretaroLogo = screen.getByAltText(expectedAlternativeText);

      expect(bretaroLogo).toBeInTheDocument();
    });

    test("Then it should render a navbar with a link to navigate to create book page", () => {
      const expectedName = "add book";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const link = screen.getByRole("link", { name: expectedName });

      expect(link).toBeInTheDocument();
    });
  });
});
