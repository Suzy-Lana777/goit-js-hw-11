import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


//імпортуємо свої функції для НТТР та відмальовування на сторінці лішок

import searchImages from "./js/pixabay-api";
import createCart from "./js/pixabay-api";

// шукаємо форму і вішаємо на її сабміт слухача

const refs = {
    form: document.querySelector (`.form`),
    ulGallery: document.querySelector (`.ul-gallery`),
    button: document.querySelector ('.button'),
    loader: document.querySelector ('.loader'),
}