import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch } from "../../store";
import { deleteBooksActionCreator } from "../../store/books/booksSlice";
import { BookDataStructure } from "../../types";
import Button from "../Button/Button";
import BookCardStyled from "./BookCardStyled";

interface BookCardProps {
  bookProps: BookDataStructure;
  isLazy?: "lazy" | "eager";
}

const BookCard = ({ bookProps, isLazy }: BookCardProps): React.ReactElement => {
  const { deleteBooks } = useBooks();
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    deleteBooks(bookProps.id);
    dispatch(deleteBooksActionCreator(bookProps.id));
  };

  return (
    <BookCardStyled>
      <Link className="card-link" to={`/books/${bookProps.id}`}>
        <img
          src={bookProps.frontPage}
          alt={`${bookProps.title} front page`}
          className="card__image"
          width="75"
          height="120"
          loading={isLazy}
        />
        <div className="info">
          <h2 className="info__title">{bookProps.title}</h2>
          <span className="info__author">{bookProps.author}</span>
        </div>
      </Link>
      <Button
        classname="card__button"
        ariaLabel="delete"
        title="delete"
        image={
          <img
            src="/images/delete-icon.svg"
            alt="delete icon"
            width={48}
            height={48}
          />
        }
        actionOnClick={handleOnClick}
      />
    </BookCardStyled>
  );
};

export default BookCard;
