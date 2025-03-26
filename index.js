import{a as u,S as d,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";const m="49399736-5639b789053676a95c3f2e38d";function g(t){const i=new URLSearchParams({q:t,key:m,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`?${i}`).then(r=>r.data.hits).catch(r=>{throw r})}function h(t){const{webformatURL:i,largeImageURL:r,tags:s,likes:e,views:o,comments:n,downloads:p}=t;return`
    <li class="li-gallery">
      <a class="li-gallery-a" href="${r}">
        <img class="img" src="${i}" alt="${s}" />
      </a>
      <ul class="baner-info">
        <li class="baner-info-li">
          <p class="baner-info-li-title">Likes</p>
          <p class="baner-info-li-text">${e}</p>
        </li>
        <li class="baner-info-li">
          <p class="baner-info-li-title">Views</p>
          <p class="baner-info-li-text">${o}</p>
        </li>
        <li class="baner-info-li">
          <p class="baner-info-li-title">Comments</p>
          <p class="baner-info-li-text">${n}</p>
        </li>
        <li class="baner-info-li">
          <p class="baner-info-li-title">Downloads</p>
          <p class="baner-info-li-text">${p}</p>
        </li>
      </ul>
    </li>`}function y(t){return t.map(h).join("")}function f(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function b(t){const i={list:document.querySelector(".gallery")};if(!i.list){console.error("No images found");return}if(f(),t.length===0){iziToast.warning({title:"No images found",message:"Try another search term!",position:"topRight"});return}const r=y(t);i.list.insertAdjacentHTML("beforeend",r),new d(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh()}const l={form:document.querySelector(".form"),input:document.querySelector(".input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",L);function L(t){t.preventDefault();const i=t.currentTarget.elements.user_request.value.trim();if(!i){a.warning({title:"WARNING",message:"Please enter a search term.",position:"topRight"});return}f(),R(),g(i).then(r=>{if(c(),r.length===0){a.error({title:"ERROR",message:"No images found. Try another search term!",position:"topRight"});return}b(r)}).catch(r=>{c(),a.error({title:"ERROR",message:`Error fetching images: ${r.message}`,position:"topRight"})}),t.target.reset()}function R(){l.loader.classList.remove("visually-hidden")}function c(){l.loader.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
