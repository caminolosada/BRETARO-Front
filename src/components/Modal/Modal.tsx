import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  icon: string;
  feedback: string;
  message: string;
  className: string | undefined;
}

const Modal = ({
  icon,
  className,
  feedback,
  message,
}: ModalProps): React.ReactElement => {
  return (
    <ModalStyled className={className}>
      <article className={`modal-container ${className} `}>
        <Button
          classname="close"
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
        <span className="feedback__msg">{message}</span>
      </article>
    </ModalStyled>
  );
};

export default Modal;
