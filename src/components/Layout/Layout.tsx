import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import BookListPage from "../../pages/BookListPage";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Modal />
        <BookListPage />
        <Outlet />
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default Layout;
