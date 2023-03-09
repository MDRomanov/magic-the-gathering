const React = require('react');
const Layout = require('./Layout');

function Loginisation({ title }) {
  return (
    <Layout title={title}>
      <section className="container">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Войти в учетную запись
                    </h2>

                    <form
                      action="/magicard/authorization/loginisation"
                      method="POST"
                      id="formLog"
                    >
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Ваш Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Пароль
                        </label>
                        <input
                          name="password"
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p style={{ color: 'red' }} className="error" />
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-secondary btn-block btn-lg gradient-custom-2 text-body"
                        >
                          Войти
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

module.exports = Loginisation;
