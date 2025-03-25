import{a as f,S as L,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();f.defaults.baseURL="https://pixabay.com";function R(o){const r=new URLSearchParams({q:o,key:"49399736-5639b789053676a95c3f2e38d",image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`https://pixabay.com/api/?${r}`)}function q(o){const r={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function i(a){const{webformatURL:p,largeImageURL:d,tags:m,likes:g,views:h,comments:y,downloads:b}=a;return` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${d}">
        <img class="img" src="${p}" 
        alt="${m}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${g}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${h}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${y}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${b}</p>
          
            </li>
        </ul>
        </li> `}function n(a){return a.map(i).join("")}const e=n(o);r.list.insertAdjacentHTML("afterbegin",e),new L(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh(),r.loader.classList.add("hidden")}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),gallery:document.querySelector(".gallery"),button:document.querySelector(".button"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",S);function S(o){o.preventDefault();const r=s.input.value.trim();r===""&&l.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."}),u(),v(),R(r).then(i=>{i.data.hits.length===0&&(u(),c(),l.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),q(i.data.hits)}).catch(i=>{u(),c(),l.error({title:"ERROR",message:`Error fetching images: ${i}`,position:"topRight"})}),c(),o.target.reset()}function c(){s.loader.classList.toggle("visually-hidden")}function v(){s.loader.classList.remove("visually-hidden")}function u(){s.gallery.innerHTML=""}
//# sourceMappingURL=index.js.map
