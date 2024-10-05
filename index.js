import{i as d,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){const o="https://pixabay.com/api/",r="46001925-09c36435a6f5ed4e05a6b9a17";s.includes(" ")&&s.replace(/\s+/g,"+");const i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function f(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}const n=document.querySelector(".js-search"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";n.addEventListener("submit",m);function m(s){s.preventDefault(),c.innerHTML="",l.style.display="block";const o=s.target.elements.search.value;p(o).then(r=>{l.style.display="none",r.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight",color:"white"}),c.innerHTML=f(r.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),n.reset()}).catch(r=>{l.style.display="none",console.log(r)})}
//# sourceMappingURL=index.js.map
