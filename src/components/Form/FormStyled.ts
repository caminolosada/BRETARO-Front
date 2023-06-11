import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;

  .form {
    &__container {
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      padding: 20px;
      gap: 20px;
    }

    &__label {
      font-size: ${(props) => props.theme.fontSize.small};
    }

    &__input {
      font-family: ${(props) => props.theme.fonts.primary};
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.background};
      border: none;
      height: 48px;
      padding: 20px 16px;
    }

    &__select {
      font-family: ${(props) => props.theme.fonts.primary};
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.background};
      border: none;
      height: 48px;
      padding: 0px 16px;
    }

    &__option {
      height: 48px;
    }

    &__button {
      margin: 0 auto;
      margin-bottom: 150px;
      background-color: ${(props) => props.theme.colors.tertiary};
      color: ${(props) => props.theme.colors.generalText};
      width: 162px;
      height: 48px;
      border-radius: 5px;
      font-size: ${(props) => props.theme.fontSize.medium};
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      display: flex;
      justify-content: center;
      align-items: center;

      :disabled {
        color: ${(props) => props.theme.colors.generalText + 50};
      }
    }
  }
`;

export default FormStyled;
