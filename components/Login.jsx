const React = require('react');
const Layout = require('./Layout');

function Login({}) {
  return (
    <Layout>
      <section class="container_login">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Войди в учётную запись
                    </h2>

                    <form
                      action="/magicard/authorization/registration"
                      method="POST"
                      // type="submit"
                      id="formReg"
                    >
                      {/* <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example1cg">
                        Your Name
                      </label>
                    </div> */}

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

                      {/* <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example4cdg">
                        Repeat your password
                      </label>
                    </div> */}

                      {/* <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{' '}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div> */}

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-secondary btn-block btn-lg gradient-custom-2 text-body"
                        >
                          Войти
                        </button>
                      </div>

                      {/* <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{' '}
                      <a href="#!" class="fw-bold text-body">
                        <u>Login here</u> */}
                      {/* </a> */}
                      {/* </p> */}
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

module.exports = Login;
