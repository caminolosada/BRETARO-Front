import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import LoadMore from "./LoadMore";

describe("Given a LoadMore component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Load more' inside", () => {
      const expectedText = "Load more";
      const onClick = vi.fn();

      renderWithProviders(<LoadMore onClick={onClick} />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });
  describe("When it receives a function and an user clicks on it", () => {
    test("Then it shoul call that function", async () => {
      const expectedText = "Load more";
      const onClick = vi.fn();

      renderWithProviders(<LoadMore onClick={onClick} />);

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      await userEvent.click(loadMoreButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
