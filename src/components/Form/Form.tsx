import { useState } from "react";
import { BookStructure } from "../../types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
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

  return (
    <FormStyled className="form" autoComplete="off" noValidate>
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
          onChange={onChangeForm}
        >
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
          min={1}
          max={5}
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
          <option value="read" className="form__option">
            Keep
          </option>
          <option value="unread">Borrowed</option>
          <option value="unread">Get rid</option>
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