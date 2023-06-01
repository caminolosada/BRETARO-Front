import { BookStructure } from "../../types";
import BookListStyled from "./BooksListStyled";

interface BooksListProps {
  booksProps: BookStructure[];
}

const BooksList = ({ booksProps }: BooksListProps): React.ReactElement => {
  return (
    <BookListStyled className="books-list">
      {booksProps.map((book) => (
        <li className="books-list__card" key={book._id}>
          <h2 className="books-list__card-title">{book.title}</h2>
        </li>
      ))}
    </BookListStyled>
  );
};

export default BooksList;
