import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Filter from "./Filter";
import { vi } from "vitest";

const handleOnFilter = vi.fn();

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select field with multiple options");

    const expectedAriaSelect = "filter by read or unread";

    renderWithProviders(<Filter onChange={handleOnFilter} />);

    const selectField = screen.getByLabelText(expectedAriaSelect);

    expect(selectField).toBeInTheDocument();
  });

  test("Then it should show an option called 'Show all books'", () => {
    const expectedAriaFirstOption = "show all books";

    renderWithProviders(<Filter onChange={handleOnFilter} />);

    const option = screen.getByLabelText(expectedAriaFirstOption);

    expect(option).toBeInTheDocument();
  });

  test("Then it should show an option called 'read'", () => {
    const expectedAriaSecondOption = "read";

    renderWithProviders(<Filter onChange={handleOnFilter} />);

    const option = screen.getByLabelText(expectedAriaSecondOption);

    expect(option).toBeInTheDocument();
  });

  test("Then it should show an option called 'unread'", () => {
    const expectedAriaThirdOption = "unread";

    renderWithProviders(<Filter onChange={handleOnFilter} />);

    const option = screen.getByLabelText(expectedAriaThirdOption);

    expect(option).toBeInTheDocument();
  });
});
