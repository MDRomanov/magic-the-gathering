const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function ShowAllBasket({ cards, user }) {
  return (
    <Layout user={user}>
      <h1>Show All Basket</h1>
      <div id="all">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      {/* <!-- Button trigger modal --> */}
      <div class="d-flex">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">GFGF</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ShowAllBasket;

// display: grid;
// grid-template-columns: 2fr 2fr 2fr;
