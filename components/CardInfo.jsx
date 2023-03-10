const React = require("react");

module.exports = function CardInfo({ card, user, userId }) {
  return (
    <div className="all">
      <div className="card card-div">
        <img className="card-title-img" src={card.img} alt="..." />
        <div className="card-body bg-red">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">Цена: {card.price} руб</p>
          <p className="card-text">
            Внешнее состояние от 1 до 10: {card.newOrOld}
          </p>
          {/* <p className="card-text">
            Город продавца: {user.city}
          </p> */}
          {/* проверка для логинизации */}
          <a href={`/magicard/${card.id}`} className="btn btn-primary">
            Полная информация
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
  );
};
