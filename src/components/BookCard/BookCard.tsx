import { BookStructure } from "../../types";
import Button from "../Button/Button";
import BookCardStyled from "./BookCardStyled";

interface BookCardProps {
  bookProps: BookStructure;
}

const BookCard = ({ bookProps }: BookCardProps): React.ReactElement => {
  return (
    <BookCardStyled>
      <img
        src={bookProps.frontPage}
        alt={`${bookProps.title} front page`}
        className="card-front-page"
        width="90"
        height="120"
      />
      <div className="info-book">
        <h2 className="info-book__title">{bookProps.title}</h2>
        <span className="info-book__author">{bookProps.author}</span>
        <Button
          classname="delete-button"
          image={<img src="/public/images/delete-icon.svg" alt="delete icon" />}
        />
      </div>
    </BookCardStyled>
  );
};

export default BookCard;
