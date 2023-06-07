import { NavLink } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";
import paths from "../../routers/paths/paths";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <span className="error">404</span>
      <span className="feedback">Glops!</span>
      <h1 className="feedback">Page not found</h1>
      <p className="message">
        It is a good time to pick up a book and continue reading
      </p>
      <NavLink
        className="home"
        to={paths.home}
        title="back home"
        aria-label="back home"
      >
        Back home
      </NavLink>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
