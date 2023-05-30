import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="/images/text-logo.svg"
        alt="bretaro logo"
        width={200}
        height={30}
      />
    </HeaderStyled>
  );
};

export default Header;
