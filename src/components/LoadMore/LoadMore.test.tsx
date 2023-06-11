import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoadMore from "./LoadMore";

describe("Given a LoadMore component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Load more' inside", () => {
      const expectedText = "Load more";

      renderWithProviders(<LoadMore />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
});
