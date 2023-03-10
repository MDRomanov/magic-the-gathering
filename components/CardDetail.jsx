const React = require("react");
const Layout = require("./Layout");

module.exports = function CardDetail({ card, userId, user }) {
  return (
    <Layout user={user}>
      <div className="detail" id="detailCard">
        <div className="card-detail">
          <img className="card-title-img-detail" src={card.img} alt="..." />
          <div className="card-body-detail">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">Цена: {card.price} руб</p>
            <p className="card-text">
              Внешнее состояние от 1 до 10: {card.newOrOld}
            </p>
            {/* <p className="card-text">
            Город продавца: {user.city}
          </p> */}
            {/* проверка для логинизации */}
            <button
              className="btn-detail add"
              id="addInBasket"
              data-id={card.id}
            >
              Добавить в корзину
            </button>
            <a href={`/magicard/${card.id}`} className="btn-detail">
              Редактировать карточку
            </a>
            <a href={`/magicard/${card.id}`} className="btn-detail icon">
              Удалить карточку
            </a>
            {userId === card.userId && (
              <>
                <i className="bi bi-trash3-fill icon" data-id={card.id} />
                <i className="bi bi-tools" data-id={card.id} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
