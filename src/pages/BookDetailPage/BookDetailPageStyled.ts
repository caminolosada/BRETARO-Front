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

    &__valoration {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      font-size: ${(props) => props.theme.fontSize.large};
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    &__author {
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    &__cosmos {
      padding: 20px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`;

export default BookDetailPageStyled;
