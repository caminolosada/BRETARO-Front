import { addedBookMock, booksMocks } from "../../mocks/booksMock";
import { BookDataStructure } from "../../types";
import { BooksState } from "../types";
import {
  addBooksActionCreator,
  addFilterActionCreator,
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
          status: "unread",
          title: "",
          id: "",
        },
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
          id: "",
        },
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
          id: "",
        },
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
          id: "",
        },
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
          id: "",
        },
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
          id: "",
        },
        collection: 7,
        filter: "",
      };

      const expectedNewState: BooksState = {
        booksData: booksMocks,
        selectedBook: addedBookMock,
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
        },
        collection: 7,
        filter: "",
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
          status: "read",
          title: "",
        },
        collection: 14,
        filter: "",
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

describe("Given a addFilter reducer", () => {
  describe("When it receives an umpty filter state and the action to filter by 'unread'", () => {
    test("Then it should return a new 'unread' filter state", () => {
      const currentBooksState: BooksState = {
        booksData: booksMocks,
        selectedBook: {
          author: "",
          cosmos: "",
          destination: "",
          editorial: "",
          frontPage: "",
          id: "",
          publicationYear: "",
          rating: 0,
          status: "",
          title: "",
        },
        collection: 8,
        filter: "",
      };

      const expectedBooksState: BooksState = {
        ...currentBooksState,
        filter: "unread",
      };

      const loadFilteredBooks = addFilterActionCreator("unread");

      const newState: BooksState = booksReducer(
        currentBooksState,
        loadFilteredBooks
      );

      expect(newState).toStrictEqual(expectedBooksState);
    });
  });
});
