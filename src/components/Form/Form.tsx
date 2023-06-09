import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled className="form" autoComplete="off" noValidate>
      <div className="form__container">
        <label className="form__label" htmlFor="frontpage">
          URL frontpage image
        </label>
        <input className="form__input" type="text" id="frontpage" />
        <label className="form__label" htmlFor="title">
          Title
        </label>
        <input className="form__input" type="text" id="title" />
        <label className="form__label" htmlFor="author">
          Author
        </label>
        <input className="form__input" type="text" id="author" />
        <label className="form__label" htmlFor="publicationYear">
          Publication year
        </label>
        <input className="form__input" type="text" id="publicationYear" />
        <label className="form__label" htmlFor="editorial">
          Editorial
        </label>
        <input className="form__input" type="text" id="editorial" />
        <label className="form__label" htmlFor="editorial">
          Editorial
        </label>
        <input className="form__input" type="text" id="editorial" />
        <label className="form__label" htmlFor="status">
          Choose status
        </label>
        <select name="status" id="status" className="form__select">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
        <label className="form__label" htmlFor="valoration">
          Valoration (1-5)
        </label>
        <input className="form__input" type="number" id="valoration" />
        <label className="form__label" htmlFor="destination">
          Choose destination
        </label>
        <select name="status" id="destination" className="form__select">
          <option value="read" className="form__option">
            Keep
          </option>
          <option value="unread">Borrowed</option>
          <option value="unread">Get rid</option>
        </select>
        <label className="form__label" htmlFor="cosmos">
          I would like to remember...
        </label>
        <textarea className="form__input" id="cosmos" />
      </div>
      <Button classname="form__button" text="Add book" ariaLabel="Add button" />
    </FormStyled>
  );
};

export default Form;
