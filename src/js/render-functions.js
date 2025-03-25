// функції для відображення елементів інтерфейсу

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function createHTML(data) {
  const refs = {
    list: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
  };

  function createCart(item) {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = item;
  
    return ` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${largeImageURL}">
        <img class="img" src="${webformatURL}" 
        alt="${tags}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${likes}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${views}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${comments}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${downloads}</p>
          
            </li>
        </ul>
        </li> `;

  }

  function createsCart(items) {
      return items.map(createCart).join('');
    }

    const markup = createsCart(data);
    refs.list.insertAdjacentHTML('afterbegin', markup);

    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      animationSpeed: 250,
    });
  
    lightbox.refresh();
    refs.loader.classList.add('hidden');

}