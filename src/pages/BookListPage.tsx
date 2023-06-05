import { useEffect } from "react";
import BooksList from "../components/BooksList/BooksList";
import useBooks from "../hooks/useBooks/useBooks";
import { useAppDispatch, useAppSelector } from "../store";
import { loadBooksActionCreator } from "../store/books/booksSlice";
import BookListPageStyled from "./BookListPageStyled";
import Modal from "../components/Modal/Modal";
import modalData from "../data/modalData";

const BookListPage = (): React.ReactElement => {
  const books = useAppSelector((state) => state.books.booksData);
  const isError = useAppSelector((state) => state.ui.isError);

  const { getBooks } = useBooks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const books = await getBooks();

      dispatch(loadBooksActionCreator(books));
    })();
  }, [dispatch, getBooks]);

  return (
    <>
      {isError && (
        <Modal
          type={modalData.type.error}
          icon={modalData.icon.error}
          feedback={modalData.feedback.error}
          message={modalData.message.errorBooks}
        />
      )}
      <BookListPageStyled>
        <h1 className="title">What is in your shelf?</h1>
        <BooksList booksProps={books} />
      </BookListPageStyled>
    </>
  );
};

export default BookListPage;
