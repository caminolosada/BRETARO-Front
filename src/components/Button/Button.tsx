interface ButtonProps {
  image?: React.ReactElement;
  text?: string;
  classname: string;
  actionOnClick?: () => void;
  title?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const Button = ({
  image,
  text,
  classname,
  ariaLabel,
  title,
  disabled,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={classname}
      onClick={actionOnClick}
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
    >
      {text}
      {image}
    </button>
  );
};

export default Button;
