const React = require("react");
const Layout = require("./Layout");

function Registration({ title }) {
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
                      Создайте учетную запись
                    </h2>

                    <form
                      action="/magicard/authorization/registration"
                      method="POST"
                      id="formReg"
                    >
                      <div className="form-outline mb-4">
                        <label className="form-label" for="name">
                          Ваше имя
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          name="name"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="email">
                          Ваш Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="password">
                          Пароль
                        </label>
                        <input
                          name="password"
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="password2">
                          Повторите ваш пароль
                        </label>
                        <input
                          name="password2"
                          type="password"
                          id="password2"
                          className="form-control form-control-lg"
                        />
                      </div>

                      {/* <div className="d-flex justify-content-center"> */}
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block btn-lg gradient-custom-2 text-body"
                      >
                        Зарегистрироваться
                      </button>
                      {/* </div> */}

                      <p className="text-center text-muted mt-5 mb-0">
                        Если есть созданный аккаунт?{" "}
                        <a
                          href="/magicard/authorization/loginisation"
                          className="fw-bold text-body"
                        >
                          <u>Войдите здесь</u>
                        </a>
                      </p>
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

module.exports = Registration;
