const React = require("react");
const Layout = require("./Layout");

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
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example3cg">
                          Ваш Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example4cg">
                          Пароль
                        </label>
                      </div>

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
