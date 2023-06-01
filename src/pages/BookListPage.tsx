import { booksMocks } from "../mocks/booksMock";
import { useAppDispatch } from "../store";
import { loadBooksActionCreator } from "../store/books/booksSlice";
import BookListPageStyled from "./BookListPageStyled";

const BookListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadBooksActionCreator(booksMocks));
  return (
    <BookListPageStyled>
      <h1 className="title">What is in your shelf?</h1>
    </BookListPageStyled>
  );
};

export default BookListPage;
