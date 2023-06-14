import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Bretaro logo with the alternative text 'bretaro logo'", () => {
      const expectedAlternativeText = "bretaro logo";
      renderWithProviders(wrapWithRouter(<App />));

      const bretaroLogo = screen.getByAltText(expectedAlternativeText);

      expect(bretaroLogo).toBeInTheDocument();
    });
  });
});
