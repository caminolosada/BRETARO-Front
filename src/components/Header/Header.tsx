import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="/public/images/text-logo.svg"
        alt="brearo logo"
        width={200}
        height={30}
      />
    </HeaderStyled>
  );
};

export default Header;
