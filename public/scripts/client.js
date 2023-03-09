const form = document.getElementById('formAdd');
const divCards = document.getElementById('divCards');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, img, price, quality, action, method } = event.target;

    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        img: img.value,
        price: price.value,
        quality: quality.value,
      }),
    });
    const data = await res.json();
    // if (data.message === 'Ваша карточка добавлена') {
        divCards.insertAdjacentHTML('beforeend', data.html);
      window.location.assign('/magicard');
    // } else {
    //   document.querySelector('.error').innerHTML = data.message;
    // }
  });
}
