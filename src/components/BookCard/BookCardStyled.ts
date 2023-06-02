import styled from "styled-components";

const BookCardStyled = styled.article`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  height: 160px;
  margin-top: 10px;
  padding: 20px;
  gap: 10px;

  .card-front-page {
    border-radius: 8px;
    object-fit: cover;
  }

  .info-book {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.small};

    &__title {
      max-width: 13ch;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: bold;
    }
  }
`;

export default BookCardStyled;
