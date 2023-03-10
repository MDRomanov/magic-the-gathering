
const form = document.getElementById("formAdd");
const CreateCard = document.getElementById("CreateCard");
const divCards = document.getElementById("divCards");
const detail = document.querySelector("#detailCard");
const updateCard = document.querySelector('#updateCard');

if (detail) {
  detail.addEventListener("click", async (event) => {
    // console.log(event.target.classList.contains("add"));
    if (event.target.classList.contains("add")) {
      event.preventDefault();
      const res = await fetch(`/magicard/${event.target.dataset.id}`, {
        method: "POST",
      });
      // const data = await res.json();
      // if (data.cardNum) {
      //   event.target.closest(".all").remove();
      // }
    }
  });
}


if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const {
      name, img, price, quality, action, method,
    } = event.target;

    const res = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",
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
  divCards.addEventListener("click", async (event) => {
    if (event.target.classList.contains("icon")) {
      event.preventDefault();
      const res = await fetch(`/magicard/${event.target.dataset.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.cardNum) {
        event.target.closest(".all").remove();
      }
    }
  });
}


//if (updateCard) {
 // updateCard.addEventListener('click', async (e) => {
  //  e.preventDefault();
  //  const {
  //    name, img, price, quality,
  //  } = e.target;
   // const result = await fetch(`/magicard/edit/${e.target.dataset.id}`, {
    //  method: 'PUT',
     // headers: {
        //'Content-Type': 'application/json',


if (CreateCard) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, img, price, quality, action, method } = event.target;
    const res1 = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        name: name.value,
        img: img.value,
        price: price.value,
        quality: quality.value,
      }),
    });
    const data = await result.json();
    if (!data) {
      updateCard.insertAdjacentHTML('beforeend', data.message);
    } else {
      window.location.assign('/magicard');
    }
  });
}


    const data = await res1.json();
    divCards.insertAdjacentHTML("beforeend", data.html);
    window.location.assign("/magicard");
  });
}

