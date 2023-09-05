import styled from "styled-components";

const BookDetailPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  margin-bottom: 100px;

  .frontpage {
    border-radius: 8px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    &__status {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      font-size: ${(props) => props.theme.fontSize.large};
    }

    &__valoration {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }

    &__title {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      font-size: ${(props) => props.theme.fontSize.large};
      text-align: center;
    }

    &__cosmos {
      padding: 20px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.background};
    }
  }

  .modify__button {
    margin-top: 34px;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.generalText};
    width: 162px;
    height: 48px;
    border-radius: 5px;
    font-size: ${(props) => props.theme.fontSize.medium};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export default BookDetailPageStyled;
