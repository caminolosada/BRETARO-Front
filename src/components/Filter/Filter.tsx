import FilterStyled from "./FilterStyled";

interface FilterProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter = ({
  onChange: handleOnFilter,
}: FilterProps): React.ReactElement => {
  return (
    <FilterStyled>
      <select
        name="filter"
        className="filter__select"
        aria-label="filter by read or unread"
        onChange={handleOnFilter}
      >
        <option hidden className="filter__default">
          Choose read/unread
        </option>
        <option value="" className="filter__option" aria-label="show all books">
          Show all books
        </option>
        <option value="read" className="filter__option" aria-label="read">
          Read
        </option>
        <option value="unread" className="filter__option" aria-label="unread">
          Unread
        </option>
      </select>
    </FilterStyled>
  );
};

export default Filter;
