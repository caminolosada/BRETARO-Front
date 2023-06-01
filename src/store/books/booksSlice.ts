import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookStructure } from "../../types";

export interface BooksState {
  booksData: BookStructure[];
}

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
  },
});

export const { loadBooks: loadBooksActionCreator } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
