import Form from "../../components/Form/Form";
import AddBookPageStyled from "./AddBookPageStyled";

const AddBookPage = (): React.ReactElement => {
  return (
    <AddBookPageStyled>
      <h1 className="title">Something new to add in your shelve?</h1>
      <Form />
    </AddBookPageStyled>
  );
};

export default AddBookPage;
