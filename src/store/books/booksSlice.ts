import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookDataStructure } from "../../types";
import { BooksState } from "../types";

const initialBooksState: BooksState = {
  booksData: [],
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

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    loadBooks: (
      currentBooksState,
      action: PayloadAction<BookDataStructure[]>
    ): BooksState => ({
      ...currentBooksState,
      booksData: [...action.payload],
    }),
    deleteBooks: (
      currentBooksState,
      action: PayloadAction<string>
    ): BooksState => ({
      ...currentBooksState,
      booksData: currentBooksState.booksData.filter(
        (book) => book.id !== action.payload
      ),
    }),
    addBooks: (
      currentBooksState,
      action: PayloadAction<BookDataStructure>
    ): BooksState => ({
      ...currentBooksState,
      booksData: [...currentBooksState.booksData, action.payload],
    }),
    loadSelectedBook: (
      currentBooksState,
      action: PayloadAction<BookDataStructure>
    ): BooksState => ({
      ...currentBooksState,
      selectedBook: action.payload,
    }),
    loadMoreBooks: (currentBooksState): BooksState => ({
      ...currentBooksState,
      collection: currentBooksState.collection + 7,
    }),
  },
});

export const {
  loadBooks: loadBooksActionCreator,
  deleteBooks: deleteBooksActionCreator,
  addBooks: addBooksActionCreator,
  loadSelectedBook: loadSelectedBookActionCreator,
  loadMoreBooks: loadMoreBooksActionCreator,
} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
