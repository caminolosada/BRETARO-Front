import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  position: fixed;
  background-color: ${(props) => props.theme.colors.secondary};
  bottom: 0;
  width: 100%;

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 320px;
    padding: 14px 20px;
  }

  .li {
    display: flex;
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export default NavbarStyled;
