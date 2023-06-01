import styled from "styled-components";

const BookListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .books-list {
    &__card {
      color: ${(props) => props.theme.colors.generalText};
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: bold;
    }

    &__card-title {
      max-width: 13ch;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export default BookListStyled;
