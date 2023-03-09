const formReg = document.querySelector("#formReg");
const formLog = document.querySelector("#formLog");

if (formReg) {
  formReg.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, email, password, password2, action, method } = e.target;

    const res = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        password2: password2.value,
      }),
    });
    const data = await res.json();

    if (data.message === "зарегистрировали") {
      window.location.assign("/magicard");
    } else {
      document.querySelector(".error").innerHTML = data.message;
    }
  });
}

if (formLog) {
  formLog.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { email, password, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === "Авторизировались") {
      window.location.assign("/magicard");
    } else {
      document.querySelector(".error").innerHTML = data.message;
    }
  });
}
