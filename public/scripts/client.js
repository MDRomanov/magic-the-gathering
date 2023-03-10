const form = document.getElementById('formAdd');
const CreateCard = document.getElementById('CreateCard');
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
    if (data.message !== 'Ваша карточка добавлена') {
      document.querySelector('.error').innerHTML = data.message;
    } else {
      window.location.assign('/magicard');
    }
  });
}

if (divCards) {
  divCards.addEventListener('click', async (event) => {
    if (event.target.classList.contains('icon')) {
      event.preventDefault();
      const res = await fetch(`/magicard/${event.target.dataset.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.cardNum) {
        event.target.closest('.all').remove();
      }
    }
  });
}

// if (CreateCard) {
//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const { name, img, price, quality, action, method } = event.target;
//     const res1 = await fetch(action, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: name.value,
//         img: img.value,
//         price: price.value,
//         quality: quality.value,
//       }),
//     });
//     const data = await res1.json();
//     divCards.insertAdjacentHTML('beforeend', data.html);
//     window.location.assign('/magicard');
//   });
// }
