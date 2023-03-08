const React = require('react');

const CardInfo = require('./CardInfo');
const Layout = require('./Layout');

module.exports = function CardList({ cards, user }) {
  return (
    <Layout>
      <div className="div-header">
        <h1 className="card-list">Доступные карты</h1>
      </div>
      <div className="container d-flex flex-wrap justify-content-between" id="divCards">
        {cards.map((card) => (
          <CardInfo key={card.id} user={user} card={card} />
        ))}
      </div>
    </Layout>
  );
};
