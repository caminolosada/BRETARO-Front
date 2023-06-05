import { useAppDispatch } from "../../store";
import { hideModalActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  icon?: string;
  feedback?: string;
  message?: string;
  type?: string;
}

const Modal = ({
  icon,
  type,
  feedback,
  message,
}: ModalProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(hideModalActionCreator({ isError: false }));
  };

  return (
    <ModalStyled>
      <article className={`modal-container ${type}`}>
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
          src={icon}
          width={105}
          height={80}
        />
        <span className="feedback">{feedback}</span>
        <span className="feedback__message">{message}</span>
      </article>
    </ModalStyled>
  );
};

export default Modal;
