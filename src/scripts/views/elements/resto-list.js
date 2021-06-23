// eslint-disable-next-line import/extensions
import './resto-item.js';

class RestoList extends HTMLElement {
    set restoList(restoList) {
        this._restoList = restoList;
        console.log('set resto list: ');
        this._render();
    }

    _render() {
        const container = document.createElement('div');
        if (this._restoList.length) {
            console.log('ada daftar resto');
            container.className = 'list-container';

            this._restoList.forEach((resto) => {
                const restoItem = document.createElement('resto-item');
                restoItem.resto = resto;
                container.appendChild(restoItem);
            });
        } else {
            console.log('tidak ada daftar resto');
            container.id = 'no-data';
            container.className = 'center';
            container.innerHTML = `
            <h1 class="align-center">TIDAK ADA DATA RESTAURANT DITEMUKAN</h1>
            `;
        }
        this.appendChild(container);
    }
}

customElements.define('resto-list', RestoList);
