import Form from "../../components/Form/Form";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch } from "../../store";
import { addBooksActionCreator } from "../../store/books/booksSlice";
import { BookStructure } from "../../types";
import AddBookPageStyled from "./AddBookPageStyled";

const AddBookPage = (): React.ReactElement => {
  const { createBook } = useBooks();
  const dispatch = useAppDispatch();

  const onSubmit = async (bookData: BookStructure) => {
    const newBook = await createBook(bookData);

    if (newBook) {
      dispatch(addBooksActionCreator(newBook));
    }
  };
  return (
    <AddBookPageStyled>
      <h1 className="title">Something new to add in your shelve?</h1>
      <Form onSubmit={onSubmit} />
    </AddBookPageStyled>
  );
};

export default AddBookPage;
