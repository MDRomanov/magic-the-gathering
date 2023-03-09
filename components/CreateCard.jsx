const React = require('react');
const Layout = require('./Layout');

module.exports = function CreateCard({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="cardForm">
        <form action="/create" method="PUT" id="CreateCard">
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
              Цена
            </label>
            <input
              type="text"
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
          <button type="submit" className="btn btn-primary">
            Изменить карту
          </button>
        </form>
      </div>
    </Layout>
  );
};
