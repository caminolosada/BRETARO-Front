import Button from "../Button/Button";
import LoadMoreStyled from "./LoadMoreStyled";

const LoadMore = () => {
  return (
    <LoadMoreStyled>
      <Button classname="load__button" text="Load more" ariaLabel="Load more" />
    </LoadMoreStyled>
  );
};

export default LoadMore;
