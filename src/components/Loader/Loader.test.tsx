import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an spinner animation with the name 'loader animation'", () => {
      const expectedName = "loader animation";

      renderWithProviders(<Loader />);

      const loader = screen.getByLabelText(expectedName);

      expect(loader).toBeInTheDocument();
    });
  });
});
