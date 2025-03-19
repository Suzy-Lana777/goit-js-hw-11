    import iziToast from "izitoast";
    import "izitoast/dist/css/iziToast.min.css";
    // simplelightbox
    import SimpleLightbox from "simplelightbox";
    import "simplelightbox/dist/simple-lightbox.min.css";

    //імпортуємо свої функції для НТТР та відмальовування на сторінці лішок
    import {nttpRequest} from "./js/pixabay-api";
    import {createCart} from "./js/render-functions";

    // шукаємо форму і вішаємо на її сабміт слухача 
    const refs = {
      form: document.querySelector (`.form`),
      ulGallery: document.querySelector (`.ul-gallery`),
      button: document.querySelector ('.button'),
      loader: document.querySelector ('.loader'),
    };

    refs.form.addEventListener (`submit`, request);

    function request (event) {
      refs.loader.classList.toggle(`visually-hidden`);
      
    // подія сабміт робить оновлення сторінки, ми це скидаємо 
      event.preventDefault();
    
    // ідемо через event.currentTarget.elements.(ім,я з name HTML) + .trim(), щоб не було пробілів

    const userRequest = event.currentTarget.elements.user_request.value.trim(); 

    //перевіряємо, щоб не вводили пусте в інпут
      if (userRequest === '') { button.disabled = true; return; }
      
    //робимо запит на сервер pixabay.com за своїм клієнт ключем та параметрами з документації АРІ
    nttpRequest (userRequest)
    .then (serverInform => {

    //перевірка справжніх слів
    if (serverInform.hits.length === 0) {
      refs.loader.classList.toggle(`visually-hidden`);
        iziToast.error({
        position: 'topRight' ,
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });


    refs.ulGallery.innerHTML = '';
    refs.form.reset();
    return;}

    const gallaryCard = serverInform.hits.map(el =>createCart(el)).join('');
    // метод меп перебирає масив об,єктів і видає на кожній ітерації 1 обєкт , який заповнений рядками з описами кожної картки 
    //але нам потрібен 1 рядок, а не масив рядків, тому ми викликаємо метод .join  і зшиваємо це до купи

    //робимо функцію createCart, яка буде перетворювати отримані данні з сервера на розмітку на сторінці. Створювати картку в HTML з данними, які прийшли з сервера. 


    //додаємо на сторінку через innerHTML у знайдений список
    refs.ulGallery.innerHTML = gallaryCard;
    refs.loader.classList.toggle (`visually-hidden`);
    refs.form.reset();
    //відмальовуємо великі зображення за допомогою бібліотеки SimpleLightbox
    const elemSimpleLightbox = new SimpleLightbox(`.ul-gallery a`, {
      captionsData: `alt`, 
    });
      elemSimpleLightbox.refresh();
    })

    .catch(error => { console.log(error); }
    )
};

function clear() {
  refs.ulGallery.innerHTML = '';
}














// const refs = {
//     form: document.querySelector (`.form`),
//     ulGallery: document.querySelector (`.ul-gallery`),
//     button: document.querySelector ('.button'),
//     loader: document.querySelector ('.loader'),
// }

// refs.form.addEventListener('submit', request);

// function request (e) {
// refs.loader.classList.toggle(`visually-hidden`);
// // подія сабміт робить оновлення сторінки, ми це скидаємо 
// e.preventDefault();

// // використаємо .trim(), щоб не було пробілів
// const userRequest = e.target.elements.user_request.value.trim(); 
    
// //перевіряємо, щоб не вводили пусте в інпут
//     // searchImages(userValue);
//     // e.target.reset();

//       if (userRequest === '') {
//     iziToast.warning({
//       position: 'topRight',
//       title: 'WARN',
//       message: 'You have not specified any search parameters.',
//     });
          
// }
  
// clear();
// removeLoader();

// // робимо запит на сервер pixabay.com за своїм клієнт ключем
// // та параметрами з документації АРІ

// searchImages(userRequest)
//     .then(serverInform => {

//         //перевірка справжніх слів
// if (serverInform.hits.length === 0) {
//   refs.loader.classList.toggle (`visually-hidden`);
//   iziToast.error({
//     position: 'topRight' ,
//     message: 'Sorry, there are no images matching your search query. Please try again!',
// });

// refs.ulGallery.innerHTML = '';
// refs.form.reset();
// return;}

//  const gallaryCard = serverInform.hits.map(el =>createCart(el)).join('');
// // метод меп перебирає масив об,єктів і видає на кожній ітерації 1 обєкт , який заповнений рядками з описами кожної картки 
// //але нам потрібен 1 рядок, а не масив рядків, тому ми викликаємо метод .join  і зшиваємо це до купи

// //робимо функцію createCart, яка буде перетворювати отримані данні з сервера на розмітку на сторінці. Створювати картку в HTML з данними, які прийшли з сервера. 


// //додаємо на сторінку через innerHTML у знайдений список
// refs.ulGallery.innerHTML = gallaryCard;
// refs.loader.classList.toggle (`visually-hidden`);
// refs.form.reset();
// //відмальовуємо великі зображення за допомогою бібліотеки SimpleLightbox
// const elemSimpleLightbox = new SimpleLightbox(`.ul-gallery a`, {
//   captionsData: `alt`, 
// });
// elemSimpleLightbox.refresh();
// })

// .catch (error=>{console.log(error);})};