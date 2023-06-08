import { booksMocks } from "../../mocks/booksMock";
import { BookStructure } from "../../types";
import { BooksState } from "../types";
import {
  booksReducer,
  deleteBooksActionCreator,
  loadBooksActionCreator,
} from "./booksSlice";

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

describe("Given a deleteBooks reducer", () => {
  describe("When it receives a collection of books with one of them titled 'El desorden que dejas' its corresponding id and the action to delete it", () => {
    test("Then it should return a collection of books without 'El desorden que dejas'", () => {
      const currentBooksState: BooksState = {
        booksData: booksMocks,
      };
      const expectedNewState: BooksState = {
        booksData: [booksMocks[1]],
      };

      const deleteBooksAction = deleteBooksActionCreator(booksMocks[0].id);
      const newState: BooksState = booksReducer(
        currentBooksState,
        deleteBooksAction
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
