import { BookDataStructure } from "../types";

export interface BooksState {
  booksData: BookDataStructure[];
  selectedBook: BookDataStructure;
  collection: number;
  filter: string;
}
