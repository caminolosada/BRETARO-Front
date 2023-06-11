import { useState } from "react";
import { BookStructure } from "../../types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

interface FormProps {
  onSubmit: (bookData: BookStructure) => void;
}

const Form = ({ onSubmit }: FormProps): React.ReactElement => {
  const initialFormState: BookStructure = {
    frontPage: "",
    title: "",
    author: "",
    publicationYear: "",
    editorial: "",
    status: false,
    rating: 0,
    destination: "",
    cosmos: "",
  };

  const [bookData, setBookData] = useState(initialFormState);

  const onChangeForm = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setBookData({
      ...bookData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onSubmit(bookData);
  };

  const onChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "read") {
      setBookData({
        ...bookData,
        status: true,
      });
    } else {
      setBookData({
        ...bookData,
        status: false,
      });
    }
  };

  return (
    <FormStyled
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={handleOnSubmit}
    >
      <div className="form__container">
        <label className="form__label" htmlFor="frontPage">
          URL frontpage image
        </label>
        <input
          className="form__input"
          type="text"
          id="frontPage"
          value={bookData.frontPage}
          onChange={onChangeForm}
          required
        />
        <label className="form__label" htmlFor="title">
          Title
        </label>
        <input
          className="form__input"
          type="text"
          id="title"
          value={bookData.title}
          onChange={onChangeForm}
        />
        <label className="form__label" htmlFor="author">
          Author
        </label>
        <input
          className="form__input"
          type="text"
          id="author"
          value={bookData.author}
          onChange={onChangeForm}
        />
        <label className="form__label" htmlFor="publicationYear">
          Publication year
        </label>
        <input
          className="form__input"
          type="text"
          id="publicationYear"
          value={bookData.publicationYear}
          onChange={onChangeForm}
        />
        <label className="form__label" htmlFor="editorial">
          Editorial
        </label>
        <input
          className="form__input"
          type="text"
          id="editorial"
          value={bookData.editorial}
          onChange={onChangeForm}
        />
        <label className="form__label" htmlFor="status">
          Choose status
        </label>
        <select
          name="status"
          id="status"
          className="form__select"
          onChange={onChangeStatus}
        >
          <option hidden></option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
        <label className="form__label" htmlFor="rating">
          Valoration (1-5)
        </label>
        <input
          className="form__input"
          type="number"
          id="rating"
          value={bookData.rating}
          onChange={onChangeForm}
          max={1}
        />
        <label className="form__label" htmlFor="destination">
          Choose destination
        </label>
        <select
          name="status"
          id="destination"
          className="form__select"
          onChange={onChangeForm}
        >
          <option hidden></option>
          <option value="keep" className="form__option">
            Keep
          </option>
          <option value="borrowed">Borrowed</option>
          <option value="get rid">Get rid</option>
        </select>
        <label className="form__label" htmlFor="cosmos">
          I would like to remember...
        </label>
        <textarea
          className="form__input"
          id="cosmos"
          value={bookData.cosmos}
          onChange={onChangeForm}
        />
      </div>
      <Button classname="form__button" text="Add book" ariaLabel="Add button" />
    </FormStyled>
  );
};

export default Form;
