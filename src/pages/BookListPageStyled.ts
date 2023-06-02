import styled from "styled-components";

const BookListPageStyled = styled.main`
  display: flex;
  flex-direction: column;

  .title {
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-top: 70px;
  }
`;

export default BookListPageStyled;