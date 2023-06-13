import styled from "styled-components";

const AddBookPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .title {
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-top: 50px;
  }
`;

export default AddBookPageStyled;
