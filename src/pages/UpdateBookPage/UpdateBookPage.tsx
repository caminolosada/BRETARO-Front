import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useBooks from "../../hooks/useBooks/useBooks";
import { useAppSelector } from "../../store";
import UpdateBookPageStiled from "./UpdateBookPageStyled";
import { BookDataStructure } from "../../types";
import paths from "../../routers/paths/paths";

const UpdateBookPage = (): React.ReactElement => {
  const bookToUpdate = useAppSelector((state) => state.books.selectedBook);
  const { editBook } = useBooks();

  const navigate = useNavigate();

  const onSubmit = async (bookToUpdate: BookDataStructure) => {
    await editBook(bookToUpdate as BookDataStructure);

    navigate(paths.home);
  };
  return (
    <UpdateBookPageStiled>
      <h1 className="title">What do you want to edit?</h1>
      <Form onSubmit={onSubmit} book={bookToUpdate} textButton="Modify" />
    </UpdateBookPageStiled>
  );
};

export default UpdateBookPage;
