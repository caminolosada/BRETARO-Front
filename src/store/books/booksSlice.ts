import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookDataStructure } from "../../types";
import { BooksState } from "../types";

const initialBooksState: BooksState = {
  booksData: [],
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
  },
});

export const {
  loadBooks: loadBooksActionCreator,
  deleteBooks: deleteBooksActionCreator,
  addBooks: addBooksActionCreator,
} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
