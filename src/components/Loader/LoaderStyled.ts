import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: ${(props) => props.theme.colors.primary + 70};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;

  .loader {
    width: 77px;
    height: 77px;
    border: 5px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 3s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: ${(props) => props.theme.colors.generalText};
    width: 10px;
    height: 10px;
    transform: translate(150%, 150%);
    border-radius: 50%;
  }
  .loader::before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
    transform: translate(-150%, -150%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
