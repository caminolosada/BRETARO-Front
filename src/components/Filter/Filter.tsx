import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  return (
    <FilterStyled>
      <select
        name="filter"
        className="filter__select"
        aria-label="filter by read or unread"
      >
        <option hidden className="filter__default">
          Choose read/unread
        </option>
        <option value="" className="filter__option">
          Show all books
        </option>
        <option value="read" className="filter__option">
          Read
        </option>
        <option value="unread" className="filter__option">
          Unread
        </option>
      </select>
    </FilterStyled>
  );
};

export default Filter;
