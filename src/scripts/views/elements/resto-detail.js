import CONFIG from '../../globals/config';
import './customer-review-list';

class RestoDetail extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this._render();
    }

    _render() {
        let categories = '';
        this._resto.categories.forEach((category, i) => {
            categories += category.name;
            if (i < this._resto.categories.length - 1) {
                categories += ', ';
            } else {
                categories += '.';
            }
        });

        let foods = '';
        this._resto.menus.foods.forEach((food, i) => {
            foods += food.name;
            if (i < this._resto.menus.foods.length - 1) {
                foods += ', ';
            } else {
                foods += '.';
            }
        });

        let drinks = '';
        this._resto.menus.drinks.forEach((drink, i) => {
            drinks += drink.name;
            if (i < this._resto.menus.drinks.length - 1) {
                drinks += ', ';
            } else {
                drinks += '.';
            }
        });

        this.innerHTML = `
        <div class="resto-detail">
            <img class="detail-img center" src="${CONFIG.BASE_IMAGE_URL}/medium/${this._resto.pictureId}" alt="Gambar restoran ${this._resto.name}">
            <h2 class="resto-name-l">${this._resto.name}</h2>
            <p class="resto-deskripsi">Rating: ${this._resto.rating}</p>
            <p class="resto-deskripsi">Categories: ${categories}</p>
            <p class="resto-deskripsi">Lokasi: ${this._resto.address}, Kota ${this._resto.city}.</p>
            <div class="splitter"></div>
            <h3>Description</h3>
            <p class="resto-deskripsi">${this._resto.description}</p>
            <h3>Menu</h3>
            <p class="resto-deskripsi">Foods: ${foods}</p>
            <p class="resto-deskripsi">Drinks: ${drinks}</p>
            <h3>Customer Reviews</h3>
            <customer-review-list></customer-review-list>
        </div>
        `;

        const customerReviewList = this.querySelector('customer-review-list');
        customerReviewList.reviewList = this._resto.customerReviews;
    }
}

customElements.define('resto-detail', RestoDetail); // Import di index.js
