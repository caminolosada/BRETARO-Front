import { useState } from "react";
import { BookDataStructure } from "../../types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

interface FormProps {
  onSubmit: (bookData: BookDataStructure) => void;
  book?: BookDataStructure;
  textButton: string;
}

const Form = ({
  onSubmit,
  book,
  textButton,
}: FormProps): React.ReactElement => {
  const initialFormState: BookDataStructure = {
    frontPage: book ? book.frontPage : "",
    title: book ? book.title : "",
    author: book ? book.author : "",
    publicationYear: book ? book.publicationYear : "",
    editorial: book ? book.editorial : "",
    status: book ? book.status : "unread",
    rating: book ? book.rating : 0,
    destination: book ? book.destination : "",
    cosmos: book ? book.cosmos : "",
    id: book ? book.id : "",
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

  const disabledButton =
    !bookData.frontPage ||
    !bookData.title ||
    !bookData.author ||
    !bookData.publicationYear ||
    !bookData.editorial ||
    !bookData.destination;

  return (
    <FormStyled className="form" autoComplete="off" onSubmit={handleOnSubmit}>
      <div className="form__container">
        <label className="form__label" htmlFor="frontPage">
          URL frontpage image
        </label>
        <input
          className="form__input"
          type="url"
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
          required
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
          required
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
          required
          maxLength={4}
          pattern="[0-9]+"
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
          required
        />
        <label className="form__label" htmlFor="status">
          Choose status
        </label>
        <select
          name="status"
          id="status"
          className="form__select"
          onChange={onChangeForm}
          required
        >
          <option hidden>Choose an option</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        <label
          className={bookData.status ? "form__label" : "isNotVisible"}
          htmlFor="rating"
        >
          Valoration (1-5)
        </label>
        <input
          className={bookData.status ? "form__input" : "isNotVisible"}
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
          name="destination"
          id="destination"
          className="form__select"
          onChange={onChangeForm}
          required
        >
          <option hidden>Choose an option</option>
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
      <Button
        classname="form__button"
        text={textButton}
        ariaLabel="Submit button"
        disabled={disabledButton}
      />
    </FormStyled>
  );
};

export default Form;
