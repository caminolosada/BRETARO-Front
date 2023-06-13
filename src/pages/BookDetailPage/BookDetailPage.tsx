import BookDetailPageStyled from "./BookDetailPageStyled";

const BookDetailPage = (): React.ReactElement => {
  return (
    <BookDetailPageStyled>
      <img
        src="https://res.cloudinary.com/dg1skxpqt/image/upload/v1685524428/el-desorden_xvuti4.webp"
        alt="frontpage"
        width={240}
        height={310}
        className="frontpage"
      />
      <div className="info">
        <div className="info__valoration">
          <span>Read</span>
          <img
            className="info__valoration rating"
            src="/public/images/valoration.svg"
            width={16}
            height={16}
            alt="valoration"
          />
        </div>
        <h1 className="info__title">El desorden que dejas</h1>
        <h2 className="info__author">Carlos Montero</h2>
        <span className="info__year">2016</span>
        <span className="info__editorial">Espasa</span>
        <span className="info__destination">Destination: KEEP</span>
        <div className="info__cosmos">
          <p>
            Entre los misterios de un pueblo y la intriga de un instituto, las
            vidas de dos mujeres se entrelazan en un peligroso juego.
          </p>
        </div>
      </div>
    </BookDetailPageStyled>
  );
};

export default BookDetailPage;
