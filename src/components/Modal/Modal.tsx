import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = (): React.ReactElement => {
  return (
    <ModalStyled className="modal">
      <article className="modal-container">
        <Button
          classname="close"
          image={
            <img
              src="/public/images/delete-icon.svg"
              alt="delete icon"
              width={24}
              height={24}
            />
          }
        />
        <img
          className="icon"
          alt="ok-icon"
          src="/public/images/ok.svg"
          width={105}
          height={80}
        />
        <span className="feedback">Good!</span>
        <span className="feedback__msg">
          You no longer have this book on your shelf
        </span>
      </article>
    </ModalStyled>
  );
};

export default Modal;
