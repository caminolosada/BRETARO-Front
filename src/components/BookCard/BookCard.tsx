import { BookStructure } from "../../types";

interface BookCardProps {
  bookProps: BookStructure;
}

const BookCard = ({ bookProps }: BookCardProps): React.ReactElement => {
  return (
    <article>
      <img
        src={bookProps.frontPage}
        alt={`${bookProps.title} front page`}
        className="books-list__card-front-page"
        width="90px"
        height="120px"
      />
      <div className="info-book">
        <h2 className="books-book__title">{bookProps.title}</h2>
        <h3 className="info-book__author">{bookProps.author}</h3>
      </div>
    </article>
  );
};

export default BookCard;
