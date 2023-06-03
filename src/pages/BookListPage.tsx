import { useEffect } from "react";
import BooksList from "../components/BooksList/BooksList";
import useBooks from "../hooks/useBooks/useBooks";
import { useAppDispatch, useAppSelector } from "../store";
import { loadBooksActionCreator } from "../store/books/booksSlice";
import BookListPageStyled from "./BookListPageStyled";
import Loader from "../components/Loader/Loader";

const BookListPage = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const books = useAppSelector((state) => state.books.booksData);

  const { getBooks } = useBooks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const books = await getBooks();

      dispatch(loadBooksActionCreator(books));
    })();
  }, [dispatch, getBooks]);

  return (
    <BookListPageStyled>
      {isLoading && <Loader />}
      <h1 className="title">What is in your shelf?</h1>
      <BooksList booksProps={books} />
    </BookListPageStyled>
  );
};

export default BookListPage;
