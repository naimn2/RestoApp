import CONFIG from '../../globals/config';

class RestoDetail extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this._render();
    }

    _render() {
        this.innerHTML = `
        <div class="resto-detail">
            <img class="detail-img center" src="${CONFIG.BASE_IMAGE_URL}/medium/${this._resto.pictureId}" alt="Gambar restoran ${this._resto.name}">
            <h2 class="resto-name-l">${this._resto.name}</h2>
            <p class="resto-deskripsi">${this._resto.description}</p>
            <p class="resto-deskripsi">Rating: ${this._resto.rating}</p>
            <p class="resto-deskripsi">Kota: ${this._resto.city}</p>
        </div>
        `;
    }
}

customElements.define('resto-detail', RestoDetail); // Import di index.js
