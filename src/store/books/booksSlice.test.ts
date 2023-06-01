import { booksMocks } from "../../mocks/booksMock";
import { BookStructure } from "../../types";
import { BooksState, booksReducer, loadBooksActionCreator } from "./booksSlice";

describe("Given a loadBooks reducer", () => {
  describe("When it receives an empty books state and an action to load two books", () => {
    test("Then it should return a list with two books", () => {
      const currentEmptyState: BookStructure[] = [];

      const currentBooksState: BooksState = {
        booksData: currentEmptyState,
      };

      const loadBooksAction = loadBooksActionCreator(booksMocks);

      const expectedNewBooksState: BooksState = {
        ...currentBooksState,
        booksData: booksMocks,
      };

      const newState: BooksState = booksReducer(
        currentBooksState,
        loadBooksAction
      );

      expect(expectedNewBooksState).toStrictEqual(newState);
    });
  });
});
