import { getUser } from "../modules/getUser.js";

class RandomUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.data = await getUser();
    this.render();
  }

  render = () => {
    const color = this.data.gender === "male" ? "darkgreen" : "none";
    this.shadowRoot.innerHTML = /* html */ `

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
          color: ${color};
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
    `;
  };
}

customElements.define("random-user", RandomUser);
