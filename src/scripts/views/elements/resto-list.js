import './resto-item.js';

class RestoList extends HTMLElement {
    set restoList(restoList) {
        this._restoList = restoList;
        console.log("set resto list: ");
        this.render();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'list-container';

        for (let resto of this._restoList) {
            const restoItem = document.createElement("resto-item");
            restoItem.resto = resto;
            container.appendChild(restoItem);
        }

        this.appendChild(container);
    }
}

customElements.define('resto-list', RestoList);