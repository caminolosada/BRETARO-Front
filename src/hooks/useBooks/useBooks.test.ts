import { renderHook } from "@testing-library/react";
import { booksMocks } from "../../mocks/booksMock";
import useBooks from "./useBooks";

describe("Given a useBooks function", () => {
  describe("When it calls the getBooks function", () => {
    test("Then it should return a list with two books", async () => {
      const expectedResponse = booksMocks;

      const {
        result: {
          current: { getBooks },
        },
      } = renderHook(() => useBooks());

      const response = await getBooks();

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
