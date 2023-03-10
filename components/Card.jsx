const React = require('react');
// const Layout = require('./Layout');

function Card({ card }) {
  return (
    // <div className="divPer">
    //   <h3>{person.name}</h3>
    // </div>
    <div class="all">
      <div class="card">
        <img src={card.img} class="card-img-top" alt="..." />
        <div class="card-body bg-red">
          <h5 class="card-title">{card.name}</h5>
          <p class="card-text">{card.price}</p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
          <a href="/" class="btn btn-danger">
            Удали
          </a>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Launch static backdrop modal
          </button>
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
                <div class="modal-body">
                  <img src={card.img} class="card-img-top" alt="..." />
                  <div class="card-body bg-red">
                    <h5 class="card-title">{card.name}</h5>
                    <p class="card-text">{card.price}</p>
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Card;
