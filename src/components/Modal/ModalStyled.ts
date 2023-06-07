import styled from "styled-components";

const ModalStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.colors.background + 70};
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-container {
    position: relative;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.generalText};
    width: 280px;
    height: 320px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    gap: 24px;

    &--error {
      border: solid ${(props) => props.theme.colors.badFeedBack + 30} 10px;
    }

    &--good {
      border: solid ${(props) => props.theme.colors.goodFeedback + 30} 10px;
    }
  }

  button {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .icon {
    display: flex;
    align-items: center;
  }

  .feedback {
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: ${(props) => props.theme.fontWeight.bold};

    &__message {
      font-size: ${(props) => props.theme.fontSize.small};
      max-width: 200px;
    }
  }
`;

export default ModalStyled;
