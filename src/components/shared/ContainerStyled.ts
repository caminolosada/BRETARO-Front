import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export default ContainerStyled;
