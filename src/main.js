    import iziToast from "izitoast";
    import "izitoast/dist/css/iziToast.min.css";
    

    //імпортуємо свої функції для НТТР та відмальовування на сторінці лішок
    import nttpRequest from "./js/pixabay-api";
    import createHTML from "./js/render-functions";

    // шукаємо форму і вішаємо на її сабміт слухача 
    const refs = {
      form: document.querySelector (`.form`),
      input: document.querySelector ('.input'),
      gallery: document.querySelector (`.gallery`),
      button: document.querySelector ('.button'),
      loader: document.querySelector ('.loader'),
    };
        
    refs.form.addEventListener (`submit`, request);

    function request(event) {          
     
    // подія сабміт робить оновлення сторінки, ми це скидаємо 
     event.preventDefault();
    
    // ідемо через event.currentTarget.elements.(ім,я з name HTML) + .trim(), щоб не було пробілів

      const userRequest = refs.input.value.trim(); 

    //перевіряємо, щоб не вводили пусте в інпут
        if (userRequest === '') {
          iziToast.warning({
          position: 'topRight',
          title: 'WARN',
          message: 'You have not specified any search parameters.',
      });
      }
     
        clear();
        removeLoader();

        nttpRequest(userRequest)
          .then(data => {
            if (data.data.hits.length === 0) {
          
          clear();
          showLoader();
          iziToast.error({
            title: 'ERROR',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
          });
        }

        createHTML(data.data.hits);
      })
      .catch(error => {
        clear();
        showLoader();
        iziToast.error({
          title: 'ERROR',
          message: `Error fetching images: ${error}`,
          position: 'topRight',
        });
      });
    
      showLoader();

      event.target.reset();

};
    
function showLoader() {
      refs.loader.classList.toggle(`visually-hidden`);
      // refs.loader.classList.add('visually-hidden');
    }

    function removeLoader() {
      refs.loader.classList.remove('visually-hidden');
    }

    function clear() {
      refs.gallery.innerHTML = '';
    }
      
