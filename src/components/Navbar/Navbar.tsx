import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar">
        <li>
          <NavLink
            to="/home"
            className="navbar__icon"
            title="home"
            aria-label="home"
          >
            <img
              src="./images/home-icon.svg"
              alt="home icon"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-book"
            className="navbar__icon"
            title="add book"
            aria-label="add book"
          >
            <img
              src="./images/add-book-icon.svg"
              alt="add book icon"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
