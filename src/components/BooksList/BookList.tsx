import { BookStructure } from "../../types";

interface BooksListProps {
  booksProps: BookStructure[];
}

const BooksList = ({ booksProps }: BooksListProps): React.ReactElement => {
  return (
    <ul className="books-list">
      {booksProps.map((book) => (
        <li className="books-list__card" key={book._id}>
          <h2 className="book-list__card__title">{book.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
