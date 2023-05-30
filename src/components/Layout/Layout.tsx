import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <Navbar />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
