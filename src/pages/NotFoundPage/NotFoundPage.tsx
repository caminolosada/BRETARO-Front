import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";
import paths from "../../routers/paths/paths";

const NotFoundPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(paths.home);
  };

  return (
    <NotFoundPageStyled>
      <span className="error">404</span>
      <span className="feedback">Glops!</span>
      <h1 className="feedback">Page not found</h1>
      <p className="message">
        It is a good time to pick up a book and continue reading
      </p>
      <Button
        classname="button"
        text="Back home"
        actionOnClick={handleOnClick}
        title="back home"
        ariaLabel="back home"
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
