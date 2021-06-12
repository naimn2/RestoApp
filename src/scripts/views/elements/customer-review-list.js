import './customer-review';

class CustomerReviewList extends HTMLElement {
    set reviewList(reviewList) {
        this._reviewList = reviewList;
        this._render();
    }

    _render() {
        const listContainer = document.createElement('ul');
        listContainer.className = 'reviewlist-container';

        this._reviewList.forEach((reviewItem) => {
            const customerReview = document.createElement('customer-review');
            customerReview.customerReview = reviewItem;
            listContainer.appendChild(customerReview);
        });

        this.appendChild(listContainer);
    }
}

customElements.define('customer-review-list', CustomerReviewList);
