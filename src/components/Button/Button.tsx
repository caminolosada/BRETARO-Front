interface ButtonProps {
  image?: React.ReactElement;
  text?: string;
  classname: string;
  actionOnClick?: () => void;
}

const Button = ({
  image,
  text,
  classname,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button type="button" className={classname} onClick={actionOnClick}>
      {text}
      {image}
    </button>
  );
};

export default Button;
