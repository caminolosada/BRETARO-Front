import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show the Bretaro logo with the alternative text 'bretaro logo'", () => {
      renderWithProviders(wrapWithRouter(<Header />));
      const expectedAlternativeText = "bretaro logo";

      const bretaroLogo = screen.getByAltText(expectedAlternativeText);

      expect(bretaroLogo).toBeInTheDocument();
    });
  });
});
