import FavoriteIdb from '../../data/favorite-idb';

const favoriteResto = {
    async generateElement() {
        return `
            <resto-list>
            </resto-list>
        `;
    },

    async render() {
        const restoList = document.querySelector('resto-list');
        const restos = await FavoriteIdb.getAll();
        restoList.restoList = restos;

        const restoItems = document.querySelectorAll('.resto-container');
        restoItems.forEach((restoItem) => {
            restoItem.addEventListener('click', (event) => {
                const restoId = event.path[1].id;
                console.log('On Click:', restoId);
                window.location.href = `#/detail/${restoId}`;
            });
        });
    },
};

export default favoriteResto;
