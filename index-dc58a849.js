var c=Object.defineProperty;var d=(o,r,e)=>r in o?c(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e;var n=(o,r,e)=>(d(o,typeof r!="symbol"?r+"":r,e),e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const l=async()=>{const e=(await(await fetch("https://randomuser.me/api/")).json()).results[0];return{name:` ${e.name.title} ${e.name.first} ${e.name.last}`,email:e.email,gender:e.gender,picture:e.picture.large,city:e.location.city,country:e.location.country,username:e.login.username}};class u extends HTMLElement{constructor(){super();n(this,"render",()=>{const e=this.data.gender==="male"?"darkgreen":"none";this.shadowRoot.innerHTML=`

      <style>
        .card {
          padding: 15px;
          width: 360px;
          background-color: papayawhip;
          border: 2px dashed white;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }

        .card img{
          border-radius: 10px
        }

        .information {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .name {
          color: peru;
          color: ${e};
          font-size: 20px;
        }

        .country {
          color: darkblue;
        }

        .card:hover{
          background-color: #FDD36A;
          box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
          transition: all 0.5s ease-out;
          
        }
      </style>

      <div class="card">
        <img src="${this.data.picture}" alt="${this.data}">

        <div class="information">
            <div class="name">${this.data.name}</div>
            <div class="username">${this.data.username}</div>
            <div class="city">${this.data.city}</div>
            <div class="country">${this.data.country}</div>
            <div class="email">${this.data.email}</div>
        </div>
      </div>
    `});this.attachShadow({mode:"open"})}async connectedCallback(){this.data=await l(),this.render()}}customElements.define("random-user",u);
