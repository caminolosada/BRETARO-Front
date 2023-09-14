import { useEffect } from "react";
import BooksList from "../../components/BooksList/BooksList";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadBooksActionCreator,
  loadMoreBooksActionCreator,
} from "../../store/books/booksSlice";
import BookListPageStyled from "./BookListPageStyled";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";

const BookListPage = (): React.ReactElement => {
  const books = useAppSelector((state) => state.books.booksData);

  const { getBooks } = useBooks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const books = await getBooks();

      dispatch(loadBooksActionCreator(books));
    })();
  }, [dispatch, getBooks]);

  const handleOnClick = () => {
    dispatch(loadMoreBooksActionCreator());
  };

  return (
    <BookListPageStyled>
      <h2 className="greeting">Hi, reader!</h2>
      <h1 className="title">What is in your shelf?</h1>
      <Filter />
      <BooksList booksProps={books} />
      <LoadMore onClick={handleOnClick} />
    </BookListPageStyled>
  );
};

export default BookListPage;
