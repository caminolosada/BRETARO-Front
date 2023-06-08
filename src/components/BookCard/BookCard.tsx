import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch } from "../../store";
import { deleteBooksActionCreator } from "../../store/books/booksSlice";
import { BookStructure } from "../../types";
import Button from "../Button/Button";
import BookCardStyled from "./BookCardStyled";

interface BookCardProps {
  bookProps: BookStructure;
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
      <Button
        classname="card__button"
        aria-label="delete"
        image={
          <img
            src="/images/delete-icon.svg"
            alt="delete icon"
            width={24}
            height={24}
          />
        }
        actionOnClick={handleOnClick}
      />
    </BookCardStyled>
  );
};

export default BookCard;
