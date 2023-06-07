import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const {
    isLoading,
    modalState: { isVisible, isError, message },
  } = useAppSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loader />}
      {isVisible && <Modal isError={isError} message={message} />}
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default Layout;
