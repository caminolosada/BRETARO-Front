import Button from "../Button/Button";
import LoadMoreStyled from "./LoadMoreStyled";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: LoadMoreProps) => {
  return (
    <LoadMoreStyled>
      <Button
        classname="load__button"
        text="Load more"
        ariaLabel="Load more"
        actionOnClick={onClick}
      />
    </LoadMoreStyled>
  );
};

export default LoadMore;
