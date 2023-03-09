const React = require('react');
const Layout = require('./Layout');

module.exports = function FormAddCard({ title, currentUser }) {
  return (
    <Layout title={title} currentUser={currentUser}>
      <div className="cardForm">
        <form action="/magicard" method="POST" id="formAdd">
          <h2>Добавьте свою карточку</h2>
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
            <label for="new-or-old" className="form-label">Состояние</label>
            <input type="text" className="form-control" id="new-or-old" name="new-or-old" />
          </div>
          <button type="submit" className="btn btn-primary">Добавить карту</button>
        </form>
      </div>
    </Layout>
  );
};
