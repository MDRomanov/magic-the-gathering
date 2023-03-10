const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <i className="bi bi-house" />
                Домой
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/magicard">
                <i className="bi bi-shop-window" />
                Магазин карт
              </a>
            </li>
            {user ? (
              <>
                {' '}
                <li className="nav-item">
                  <a className="nav-link text-warning" href="/new">
                    Добавить свою карточку
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/magicard/authorization/logout">
                    Выйти из учетной записи
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/basket">
                    Корзина
                  </a>
                </li>
                <li className="nav-item">
                  <h2 className="name">Приветствуем, {user}!</h2>
                  {/* позже написать {user.name} */}
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/magicard/authorization/registration"
                  >
                    <i className="bi bi-person-add" />
                    Регистрация
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/magicard/authorization/loginisation"
                  >
                    <i className="bi bi-person-check-fill" />
                    Войти в учетную запись
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;
