import { BookStructure } from "../types";

export interface BooksState {
  booksData: BookStructure[];
}

export interface IdBookStructure {
  bookId: string;
}
