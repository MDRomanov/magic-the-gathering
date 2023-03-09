const React = require("react");

const CardInfo = require("./BasketCard");
const Layout = require("./Layout");

module.exports = function CardList({ cards, user, userId }) {
  return (
    <Layout user={user}>
      <div className="div-header">
        <h1 className="card-list">Доступные карты</h1>
      </div>
      <div
        className="container d-flex flex-wrap justify-content-between"
        id="divCards"
      >
        {cards.map((card) => (
          <CardInfo key={card.id} user={user} userId={userId} card={card} />
        ))}
      </div>
    </Layout>
  );
};
