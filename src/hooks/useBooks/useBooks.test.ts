import { renderHook } from "@testing-library/react";
import {
  addedBookMock,
  booksMocks,
  createdBookMock,
  errorEditMock,
} from "../../mocks/booksMock";
import useBooks from "./useBooks";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { wrapper } from "../../utils/testUtils";
import modalData from "../../components/Modal/modalData";
import { store } from "../../store";

describe("Given a useBooks function", () => {
  describe("When it calls the getBooks function", () => {
    test("Then it should return a list with two books", async () => {
      const expectedResponse = booksMocks;

      const {
        result: {
          current: { getBooks },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

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
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      expect(getBooks()).rejects.toThrowError();
    });
  });

  describe("When it calls the deleteBooks function with a correct id", () => {
    test("Then the feedback message 'You no longer have this book on your shelf' should be in the store", async () => {
      server.resetHandlers(...handlers);

      const bookId = booksMocks[0].id;
      const expectedMessage = modalData.message.okDeleted;

      const {
        result: {
          current: { deleteBooks },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      await deleteBooks(bookId);

      const message = store.getState().ui.modalState.message;

      expect(expectedMessage).toBe(message);
    });

    describe("When it calls the deleteBooks function with a incorrect id", () => {
      test("Then it should show the feedback message 'Couldn't remove this book from your shelf'", async () => {
        server.resetHandlers(...errorHandlers);

        const errorId = "sdkfnsdfl";
        const expectedMessage = modalData.message.errorRemove;

        const {
          result: {
            current: { deleteBooks },
          },
        } = renderHook(() => useBooks(), { wrapper: wrapper });

        await deleteBooks(errorId);

        const message = store.getState().ui.modalState.message;

        expect(expectedMessage).toBe(message);
      });
    });
  });

  describe("When it calls the createBooks function with the data of the book 'La uruguaya'", () => {
    test("Then it should return the book 'La uruguaya'", async () => {
      server.resetHandlers(...handlers);

      const expectedBook = addedBookMock;

      const {
        result: {
          current: { createBook },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      const newBook = await createBook(createdBookMock);

      expect(newBook).toStrictEqual(expectedBook);
    });
  });

  describe("When it calls the createBooks function with a book with invalid data", () => {
    test("Then it should show the feedback message 'Couldn't add this book on your shelf'", async () => {
      server.resetHandlers(...errorHandlers);

      createdBookMock.author = "";
      const expectedMessage = modalData.message.erorAdd;

      const {
        result: {
          current: { createBook },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      await createBook(createdBookMock);

      const message = store.getState().ui.modalState.message;

      expect(expectedMessage).toBe(message);
    });
  });

  describe("When it calls the getMyBook function with a valid book id", () => {
    test("Then it should return the book that corresponds to that id", async () => {
      server.resetHandlers(...handlers);
      const idBook = addedBookMock.id;
      const expectedBook = addedBookMock;

      const {
        result: {
          current: { getMyBook },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      const myBook = await getMyBook(idBook);

      expect(myBook).toStrictEqual(expectedBook);
    });
  });

  describe("When it calls the getMyBook function with an invalid book id", () => {
    test("Then it should show the feedback message 'Can't show this book now'", async () => {
      server.resetHandlers(...errorHandlers);
      const idBook = "647fa740ee528da72718451f";
      const expectedMessage = modalData.message.errorMyBook;

      const {
        result: {
          current: { getMyBook },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      await getMyBook(idBook);

      const message = store.getState().ui.modalState.message;

      expect(expectedMessage).toBe(message);
    });
  });

  describe("When it calls the editBook function with a valid book data to update", () => {
    test("Then it should show a modal with the message 'Your book has been successfully modified'", async () => {
      server.resetHandlers(...handlers);
      const bookData = addedBookMock;
      const expectedMessage = modalData.message.okEdit;

      const {
        result: {
          current: { editBook },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      await editBook(bookData);

      const message = store.getState().ui.modalState.message;

      expect(message).toBe(expectedMessage);
    });
  });

  describe("When it calls the editBook function with an invalid book data to update", () => {
    test("Then it should show the message 'Couldn't edit this book'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedMessage = modalData.message.errorEdit;
      const errorDataBook = errorEditMock;

      const {
        result: {
          current: { editBook },
        },
      } = renderHook(() => useBooks(), { wrapper: wrapper });

      await editBook(errorDataBook);

      const message = store.getState().ui.modalState.message;

      expect(message).toBe(expectedMessage);
    });
  });
});
