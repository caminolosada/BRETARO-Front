import { useAppDispatch } from "../../store";
import { hideModalActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  isError: boolean;
  message: string;
}

const Modal = ({ isError, message }: ModalProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(hideModalActionCreator());
  };

  return (
    <ModalStyled>
      <article
        className={`modal-container modal-container--${
          isError ? "error" : "good"
        }`}
      >
        <Button
          classname="button"
          actionOnClick={handleOnClose}
          image={
            <img
              src="/public/images/delete-icon.svg"
              alt="close"
              width={24}
              height={24}
            />
          }
        />
        <img
          className="icon"
          alt="modal icon"
          src={`/public/images/${isError ? "bad.svg" : "ok.svg"}`}
          width={105}
          height={80}
        />
        <span className="feedback">{`${isError ? "Glops!" : "Good!"}`}</span>
        <span className="feedback__message">{message}</span>
      </article>
    </ModalStyled>
  );
};

export default Modal;
