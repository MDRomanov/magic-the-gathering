const React = require('react');
const Layout = require('./Layout');

function Home({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div
        className="d-flex justify-content-center"
      >
        <h1 className="title">
          <i className="bi bi-card-image" />
          Magicard
          <i className="bi bi-file-richtext-fill" />
        </h1>

        <img
          src="https://i.pinimg.com/originals/60/b4/c1/60b4c1694815ec7dda836923f5321c70.jpg"
          style={{ width: '1000px' }}
          className="background"
          alt="MTG board"
        />
      </div>
    </Layout>
  );
}
module.exports = Home;
