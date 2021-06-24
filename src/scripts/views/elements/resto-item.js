import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this._render();
    }

    _render() {
        const container = document.createElement('div');
        container.className = 'resto-container';
        container.id = this._resto.id;

        container.innerHTML = `
        <img class="resto-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/small/${this._resto.pictureId}" 
            src="images/restaurant_cover-placeholder-small.jpg" alt="Gambar restoran ${this._resto.name}">
        <a class="resto-name" href="#/detail/${this._resto.id}">${this._resto.name}</a>
        <p class="resto-deskripsi">${this._resto.description}</p>
        <p class="resto-deskripsi">Rating: ${this._resto.rating}</p>
        <p class="resto-deskripsi">Kota: ${this._resto.city}</p>
        `;

        this.appendChild(container);
    }
}

customElements.define('resto-item', RestoItem);
