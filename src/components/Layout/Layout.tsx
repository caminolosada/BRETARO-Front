import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import BookListPage from "../../pages/BookListPage";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <BookListPage />
        <Outlet />
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default Layout;
