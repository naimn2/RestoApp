// eslint-disable-next-line import/extensions
import './resto-item.js';

class RestoList extends HTMLElement {
    set restoList(restoList) {
        this._restoList = restoList;
        console.log('set resto list: ');
        this.render();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'list-container';

        this._restoList.forEach((resto) => {
            const restoItem = document.createElement('resto-item');
            restoItem.resto = resto;
            container.appendChild(restoItem);
        });

        this.appendChild(container);
    }
}

customElements.define('resto-list', RestoList);
