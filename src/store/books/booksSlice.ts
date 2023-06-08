import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookStructure } from "../../types";
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
      action: PayloadAction<BookStructure[]>
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
  },
});

export const {
  loadBooks: loadBooksActionCreator,
  deleteBooks: deleteBooksActionCreator,
} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
