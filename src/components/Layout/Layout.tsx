import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default Layout;
