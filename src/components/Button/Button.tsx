interface ButtonProps {
  image?: React.ReactElement;
  text?: string;
  classname: string;
  actionOnClick?: () => void;
  title?: string;
  ariaLabel?: string;
}

const Button = ({
  image,
  text,
  classname,
  ariaLabel,
  title,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={classname}
      onClick={actionOnClick}
      aria-label={ariaLabel}
      title={title}
    >
      {text}
      {image}
    </button>
  );
};

export default Button;
