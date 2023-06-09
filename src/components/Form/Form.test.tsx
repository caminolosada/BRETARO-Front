import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the fields 'URL frontpage image', 'Title', 'Author', 'Publication year', 'Editorial', 'Choose status', 'Valoration (1-5)', 'Choose destination'and 'I would like to remember...'", () => {
      const labelNames = [
        "URL frontpage image",
        "Title",
        "Author",
        "Publication year",
        "Editorial",
        "Choose status",
        "Valoration (1-5)",
        "Choose destination",
        "I would like to remember...",
      ];

      renderWithProviders(<Form />);

      labelNames.forEach((labelName) => {
        const field = screen.getByLabelText(labelName);
        expect(field).toBeInTheDocument();
      });
    });
    test("Then it should show a button with the text 'Add book' inside", () => {
      const expectedText = "Add book";

      renderWithProviders(<Form />);

      const button = screen.getByText(expectedText);

      expect(button).toBeInTheDocument();
    });
  });
});
