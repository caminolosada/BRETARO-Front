import styled from "styled-components";

const LoadMoreStyled = styled.div`
  .load__button {
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
  }
`;

export default LoadMoreStyled;
