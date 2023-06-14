import styled from "styled-components";

const BookCardStyled = styled.article`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  height: 160px;
  margin-top: 10px;
  padding: 20px;
  gap: 20px;
  position: relative;

  .card__image {
    border-radius: 8px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.small};
    padding-left: 10px;

    &__title {
      overflow: hidden;
      font-weight: bold;
    }
  }

  .card__button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .card-link {
    display: flex;
    width: 100%;
  }
`;

export default BookCardStyled;
