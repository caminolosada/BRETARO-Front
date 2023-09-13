import { addedBookMock, booksMocks } from "../../mocks/booksMock";
import { BookDataStructure } from "../../types";
import { BooksState } from "../types";
import {
  addBooksActionCreator,
  booksReducer,
  deleteBooksActionCreator,
  loadBooksActionCreator,
  loadMoreBooksActionCreator,
  loadSelectedBookActionCreator,
} from "./booksSlice";

describe("Given a loadBooks reducer", () => {
  describe("When it receives an empty books state and an action to load four books", () => {
    test("Then it should return a list with four books", () => {
      const currentEmptyState: BookDataStructure[] = [];

      const currentBooksState: BooksState = {
        booksData: currentEmptyState,
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          publicationYear: "",
          rating: 0,
          status: true,
          title: "",
          id: "",
        },
        collection: 7,
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
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          publicationYear: "",
          rating: 0,
          status: true,
          title: "",
          id: "",
        },
        collection: 7,
      };
      const expectedNewState: BooksState = {
        booksData: [
          booksMocks[1],
          booksMocks[2],
          booksMocks[3],
          booksMocks[4],
          booksMocks[5],
          booksMocks[6],
          booksMocks[7],
        ],
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          publicationYear: "",
          rating: 0,
          status: true,
          title: "",
          id: "",
        },
        collection: 7,
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

describe("Given a addBooks reducer", () => {
  describe("When it receives a collection of books, and the action to add a new book", () => {
    test("Then it should return a collection of book with the new book titled 'La uruguaya'", () => {
      const currentBooksState: BooksState = {
        booksData: booksMocks,
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          publicationYear: "",
          rating: 0,
          status: true,
          title: "",
          id: "",
        },
        collection: 7,
      };

      const expectedNewState: BooksState = {
        booksData: [...booksMocks, addedBookMock],
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          publicationYear: "",
          rating: 0,
          status: true,
          title: "",
          id: "",
        },
        collection: 7,
      };

      const addBookAction = addBooksActionCreator(addedBookMock);
      const newState: BooksState = booksReducer(
        currentBooksState,
        addBookAction
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a loadSelectedBook reducer", () => {
  describe("When it receives and empty state of selectedBook and a load selected book action with the book 'La uruguaya'", () => {
    test("Then it should return the new state with book 'La uruguaya'", () => {
      const currentBooksState: BooksState = {
        booksData: booksMocks,
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          publicationYear: "",
          rating: 0,
          status: true,
          title: "",
          id: "",
        },
        collection: 7,
      };

      const expectedNewState: BooksState = {
        booksData: booksMocks,
        selectedBook: addedBookMock,
        collection: 7,
      };

      const loadSelectedAction = loadSelectedBookActionCreator(addedBookMock);

      const newState: BooksState = booksReducer(
        currentBooksState,
        loadSelectedAction
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a loadMoreBooks reducer", () => {
  describe("When it receives a collection of books and the action to load more books", () => {
    test("Then it should return the current and the new collection of books", () => {
      const currentBooksState: BooksState = {
        booksData: booksMocks,
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          rating: 0,
          id: "",
          publicationYear: "",
          status: true,
          title: "",
        },
        collection: 7,
      };

      const expectedBooksState: BooksState = {
        booksData: booksMocks,
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          rating: 0,
          id: "",
          publicationYear: "",
          status: true,
          title: "",
        },
        collection: 14,
      };

      const loadMoreBooksAction = loadMoreBooksActionCreator();

      const newState: BooksState = booksReducer(
        currentBooksState,
        loadMoreBooksAction
      );

      expect(newState).toStrictEqual(expectedBooksState);
    });
  });
});
