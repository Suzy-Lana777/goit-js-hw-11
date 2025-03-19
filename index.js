import{a as c,i as u,S as f}from"./assets/vendor-h_xsmXee.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();c.defaults.baseURL="https://jsonplaceholder.typicode.com";function p(i){const l=new URLSearchParams({q:i,key:"49399736-5639b789053676a95c3f2e38d",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${l}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function d(i){const{webformatURL:l,largeImageURL:r,tags:o,likes:e,views:t,comments:a,downloads:n}=i;return` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${r}">
        <img class="img" src="${l}" 
        alt="${o}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${e}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${t}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${a}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${n}</p>
          
            </li>
        </ul>
        </li> `}const s={form:document.querySelector(".form"),ulGallery:document.querySelector(".ul-gallery"),button:document.querySelector(".button"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",m);function m(i){s.loader.classList.toggle("visually-hidden"),i.preventDefault();const l=i.currentTarget.elements.user_request.value.trim();if(l===""){button.disabled=!0;return}p(l).then(r=>{if(r.hits.length===0){s.loader.classList.toggle("visually-hidden"),u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),s.ulGallery.innerHTML="",s.form.reset();return}const o=r.hits.map(t=>d(t)).join("");s.ulGallery.innerHTML=o,s.loader.classList.toggle("visually-hidden"),s.form.reset(),new f(".ul-gallery a",{captionsData:"alt"}).refresh()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=index.js.map
