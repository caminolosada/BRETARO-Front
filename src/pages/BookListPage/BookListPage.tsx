import { useEffect } from "react";
import BooksList from "../../components/BooksList/BooksList";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addFilterActionCreator,
  loadBooksActionCreator,
  loadMoreBooksActionCreator,
} from "../../store/books/booksSlice";
import BookListPageStyled from "./BookListPageStyled";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";

const BookListPage = (): React.ReactElement => {
  const books = useAppSelector((state) => state.books.booksData);
  const { filter } = useAppSelector((state) => state.books);

  const { getBooks } = useBooks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const books = await getBooks();

      dispatch(loadBooksActionCreator(books));
    })();
  }, [dispatch, getBooks, filter]);

  const handleOnClick = () => {
    dispatch(loadMoreBooksActionCreator());
  };

  const handleOnFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    dispatch(addFilterActionCreator(filter));
  };

  return (
    <BookListPageStyled>
      <h2 className="greeting">Hi, reader!</h2>
      <h1 className="title">What is in your shelf?</h1>
      <Filter onChange={handleOnFilter} />
      <BooksList booksProps={books} />
      <LoadMore onClick={handleOnClick} />
    </BookListPageStyled>
  );
};

export default BookListPage;
