import styled from "styled-components";

const BookListPageStyled = styled.main`
  display: flex;
  flex-direction: column;

  .title {
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .greeting {
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.small};
    margin-top: 40px;
  }
`;

export default BookListPageStyled;
