import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import modalData from "../../components/Modal/modalData";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppDispatch } from "../../store";
import { addBooksActionCreator } from "../../store/books/booksSlice";
import { showModalActionCreator } from "../../store/ui/uiSlice";
import { BookStructure } from "../../types";
import AddBookPageStyled from "./AddBookPageStyled";
import paths from "../../routers/paths/paths";

const AddBookPage = (): React.ReactElement => {
  const { createBook } = useBooks();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (bookData: BookStructure) => {
    const newBook = await createBook(bookData);

    if (newBook) {
      dispatch(addBooksActionCreator(newBook));
    }

    navigate(paths.home);

    dispatch(
      showModalActionCreator({
        isVisible: true,
        isError: false,
        message: modalData.message.okAdd,
      })
    );
  };
  return (
    <AddBookPageStyled>
      <h1 className="title">Something new to add in your shelve?</h1>
      <Form onSubmit={onSubmit} />
    </AddBookPageStyled>
  );
};

export default AddBookPage;
