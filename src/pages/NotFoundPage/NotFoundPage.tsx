import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ContainerStyled from "../../components/shared/ContainerStyled";
import NotFoundPageStyled from "./NotFoundPageStyled";
import paths from "../../routers/paths/paths";

const NotFoundPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(paths.home);
  };
  return (
    <>
      <ContainerStyled>
        <Header />
        <NotFoundPageStyled>
          <h2 className="error">404</h2>
          <span className="feedback">Glops!</span>
          <h1 className="feedback">Page not found</h1>
          <p className="message">
            It is a good time to pick un a book and continue reading
          </p>
          <Button
            classname="button"
            text="Back home"
            actionOnClick={handleOnClick}
            title="back home"
            ariaLabel="back home"
          />
        </NotFoundPageStyled>
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default NotFoundPage;
