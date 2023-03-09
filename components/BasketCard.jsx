const React = require('react');

module.exports = function BasketCard({ card, user, userId }) {
  return (
    <div className="all">
      <div className="card card-div">
        <img
          className="card-title-img"
          src={card['Basketlists.Card.img']}
          alt="..."
        />
        <div className="card-body bg-red">
          <h5 className="card-title">{card['Basketlists.Card.name']}</h5>
          <p className="card-text">

            Цена:
            {' '}
            {card['Basketlists.Card.price']}
            {' '}
            руб
          </p>
          <p className="card-text">

            Внешнее состояние от 1 до 10:
            {' '}
            {card['Basketlists.Card.newOrOld']}
          </p>
          {/* <p className="card-text">
            Город продавца: {user.city}
          </p> */}
          <a
            href={`/magicard/${card['Basketlists.Card.id']}`}
            className="btn btn-primary"
          >
            Полная информация
          </a>
          <i
            className="bi bi-trash3-fill"
            data-id={card['Basketlists.Card.id']}
          />
          <i className="bi bi-tools" data-id={card['Basketlists.Card.id']} />
        </div>
      </div>
    </div>
  );
};
