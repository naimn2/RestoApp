class RestoItem extends HTMLElement {

    set resto(resto) {
        this._resto = resto;
        this.render();
    }

    render() {
        const container = document.createElement("div");
        container.className = "resto-container";
        
        container.innerHTML = `
        <img class="resto-img" src="${this._resto.pictureId}" alt="Gambar restoran ${this._resto.name}">
        <h2 class="resto-name">${this._resto.name}</h2>
        <p class="resto-deskripsi">${this._resto.description}</p>
        <p class="resto-deskripsi">Rating: ${this._resto.rating}</p>
        <p class="resto-deskripsi">Kota: ${this._resto.city}</p>
        `
        
        this.appendChild(container);
    }
}

customElements.define("resto-item", RestoItem);