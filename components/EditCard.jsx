const React = require('react');
const Layout = require('./Layout');

module.exports = function EditCard({ card, user }) {
  return (
    <Layout user={user}>
      <div className="div-header">
      <h1 className="card-list">Изменить карточку</h1>
      </div>

      <main className="cardForm" role="main">
        <form method="PUT" action={`/magicard/edit/${card.id}`} id="updateCard">
          <div className="mb-3">
            <label for="name" className="form-label">Название</label>
            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" />
          </div>
          <div className="mb-3">
            <label for="img" className="form-label">Изображение</label>
            <input type="text" className="form-control" id="img" name="img" />
          </div>
          <div className="mb-3">
            <label for="price" className="form-label">Цена</label>
            <input type="text" className="form-control" id="price" name="price" />
          </div>
          <div className="mb-3">
            <label for="quality" className="form-label">Состояние</label>
            <input type="text" className="form-control" id="quality" name="quality" />
          </div>
          <button type="submit" className="btn btn-primary">Изменить карту</button>
        </form>
      </main>
    </Layout>
  );
};
