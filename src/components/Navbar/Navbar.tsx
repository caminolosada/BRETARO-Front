import { NavLink } from "react-router-dom";

const Navbar = (): React.ReactElement => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to={"/home"} className="navbar__icon">
          <img
            src="./images/home-icon.svg"
            alt="home icon"
            width={48}
            height={48}
          />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/add-book"} className="navbar__icon">
          <img
            src="./images/add-book-icon.svg"
            alt="add book icon"
            width={48}
            height={48}
          />
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
