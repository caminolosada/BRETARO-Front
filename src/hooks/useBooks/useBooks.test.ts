import { renderHook } from "@testing-library/react";
import { booksMocks } from "../../mocks/booksMock";
import useBooks from "./useBooks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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
  describe("When the getBooks function is called and an error occurs", () => {
    test("Then it throw an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getBooks },
        },
      } = renderHook(() => useBooks());

      expect(getBooks()).rejects.toThrowError();
    });
  });
});
