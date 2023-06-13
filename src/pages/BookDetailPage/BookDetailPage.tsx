import { useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch, useAppSelector } from "../../store";
import BookDetailPageStyled from "./BookDetailPageStyled";
import { loadSelectedBookActionCreator } from "../../store/books/booksSlice";
import { BookDataStructure } from "../../types";
import { useEffect } from "react";

const BookDetailPage = (): React.ReactElement => {
  const { id } = useParams();
  const { getMyBook } = useBooks();
  const dispatch = useAppDispatch();
  const myBook = useAppSelector((state) => state.books.selectedBook);

  useEffect(() => {
    (async () => {
      const book = await getMyBook(id as string);
      dispatch(loadSelectedBookActionCreator(book as BookDataStructure));
    })();
  }, [dispatch, getMyBook, id]);

  return (
    <BookDetailPageStyled>
      <img
        src={myBook.frontPage}
        alt="frontpage"
        width={240}
        height={310}
        className="frontpage"
      />
      <div className="info">
        <span className="info__status">
          {myBook.status ? `Read` : `Unread`}
        </span>
        <div className="info__valoration">
          <span>{myBook.rating}</span>
          <img
            className="info__valoration rating"
            src="/images/valoration.svg"
            width={16}
            height={16}
            alt="valoration"
          />
        </div>
        <h1 className="info__title">{myBook.title}</h1>
        <h2 className="info__author">{myBook.author}</h2>
        <span className="info__year">{myBook.publicationYear}</span>
        <span className="info__editorial">{myBook.editorial}</span>
        <span className="info__destination">
          Destination: {myBook.destination}
        </span>
        <div className="info__cosmos">
          <p>{myBook.cosmos}</p>
        </div>
      </div>
    </BookDetailPageStyled>
  );
};

export default BookDetailPage;
