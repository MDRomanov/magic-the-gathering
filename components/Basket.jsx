const React = require('react');

const BasketCard = require('./BasketCard');
const Layout = require('./Layout');

module.exports = function Basket({ cards, user }) {
  return (
    <Layout user={user}>
      <div className="div-header">
        <h1 className="card-list">Карты в вашей корзине</h1>
      </div>
      <div
        className="container d-flex flex-wrap justify-content-between"
        id="divCards"
      >
        {cards.map((card) => (
          <BasketCard key={card.id} user={user} card={card} />
        ))}
      </div>
    </Layout>
  );
};
