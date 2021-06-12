class CustomerReview extends HTMLElement {
    set customerReview(customerReview) {
        this._customerReview = customerReview;
        this._render();
    }

    _render() {
        this.innerHTML = `
        <li class="review-item">
            <span class="resto-deskripsi"><strong>${this._customerReview.name}</strong>, pada ${this._customerReview.date}:</span>
            <span class="resto-deskripsi">"${this._customerReview.review}"</span>
        </li>`;
    }
}

customElements.define('customer-review', CustomerReview);
