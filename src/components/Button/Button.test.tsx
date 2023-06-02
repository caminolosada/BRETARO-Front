import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered and receives the text 'Load more'", () => {
    test("Then it should show the received text inside", () => {
      const expectedText = "Load more";

      renderWithProviders(
        wrapWithRouter(<Button classname="button" text={expectedText} />)
      );

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and receives a delete icon", () => {
    test("Then it should show the icon with the alternative text 'delete icon'", () => {
      const expectedAlternativeText = "delete icon";

      renderWithProviders(
        wrapWithRouter(
          <Button
            classname="delete-button"
            image={
              <img
                src="/public/images/delete-icon.svg"
                alt={expectedAlternativeText}
              />
            }
          />
        )
      );

      const deleteButton = screen.getByAltText(expectedAlternativeText);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
