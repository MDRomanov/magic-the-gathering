const React = require('react');
const Layout = require('./Layout');

function Registr({}) {
  return (
    <Layout>
      <section class="container_reg">
        <form
          action="/magicard/authorization/registration"
          method="POST"
          // type="submit"
          id="formReg"
        >
          <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div class="card">
                    <div class="card-body p-5">
                      <h2 class="text-uppercase text-center mb-5">
                        Создание учетной записи
                      </h2>

                      <form>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="name"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="name">
                            Твое имя
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="email">
                            Твой Email
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="password">
                            Пароль
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password2"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="password2">
                            Повторите пароль
                          </label>
                        </div>

                        {/* <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3cg"
                          />
                          <label class="form-check-label" for="form2Example3g">
                            Я согласен со всеми требованиями{' '}
                            <a href="#!" class="text-body">
                              <u>Условия предоставления сервиса</u>
                            </a>
                          </label>
                        </div> */}

                        <div class="d-flex justify-content-center">
                          <button
                            type="submit"
                            class="btn btn-secondary btn-block btn-lg gradient-custom-2 text-body"
                          >
                            Зарегистрироваться
                          </button>
                        </div>

                        <p class="text-center text-muted mt-5 mb-0">
                          У тебя уже сть учётная запись?{' '}
                          <a
                            href="/magicard/authorization/login"
                            class="fw-bold text-body"
                          >
                            <u>Войти</u>
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
}

module.exports = Registr;
