import styled from "styled-components";

const FilterStyled = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  display: flex;
  flex-direction: column;

  .filter {
    &__select {
      background-color: ${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.generalText};
      padding: 20px;
      margin-top: 24px;
      margin-bottom: 40px;
      border: none;
      border-radius: 5px;
    }
  }
`;

export default FilterStyled;
