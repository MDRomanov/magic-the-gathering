const formReg = document.querySelector('#formReg');
const formLogin = document.querySelector('#formLogin');
console.log(formLogin);
if (formReg) {
  formReg.addEventListener('submit', async (e) => {
    console.log(e.target);
    e.preventDefault();
    const { name, email, password, password2, action, method } = e.target;
    console.log(name.value);
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        password2: password2.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/magicard');
    } else {
      console.log(data);
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    console.log(e.target);
    e.preventDefault();
    const { email, password, action, method } = e.target;

    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/magicard');
    } else {
      console.log(data);
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
