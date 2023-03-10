const React = require('react');
const Layout = require('./Layout');

module.exports = function AddCard({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="cardForm">
        <form action="/new" method="POST" id="formAdd">
          <h2 className="form-title">Добавьте свою карточку</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Название
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Изображение
            </label>
            <input type="text" className="form-control" id="img" name="img" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Цена(number)
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quality" className="form-label">
              Состояние
            </label>
            <input
              type="text"
              className="form-control"
              id="quality"
              name="quality"
            />
          </div>
          <p style={{ color: 'red' }} className="error" />
          <button type="submit" className="btn btn-primary">
            Добавить карту
          </button>
        </form>
      </div>
    </Layout>
  );
};
