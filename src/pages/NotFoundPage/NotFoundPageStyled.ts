import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.generalText};
  align-items: center;
  gap: 40px;
  margin-top: 100px;
  text-align: center;


  .error {
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    top: 120px;
  }

  .feedback {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  
  .button {
    background-color: ${(props) => props.theme.colors.tertiary};
    width: 162px;
    height: 48px;
    border-radius: 5px;
    font-size: ${(props) => props.theme.fontSize.medium};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .
`;

export default NotFoundPageStyled;
