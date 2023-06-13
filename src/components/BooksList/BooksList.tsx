import { BookDataStructure } from "../../types";
import BookCard from "../BookCard/BookCard";
import BookListStyled from "./BooksListStyled";

interface BooksListProps {
  booksProps: BookDataStructure[];
}

const BooksList = ({ booksProps }: BooksListProps): React.ReactElement => {
  return (
    <BookListStyled className="books-list">
      {booksProps.map((book, index) => (
        <li className="books-list__card" key={book.id}>
          <BookCard bookProps={book} isLazy={index < 3 ? "eager" : "lazy"} />
        </li>
      ))}
    </BookListStyled>
  );
};

export default BooksList;
