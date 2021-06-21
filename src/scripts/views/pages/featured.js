import '../elements/resto-list';
import RestoSource from '../../data/resto-source';

const featured = {
    async generateElement() {
        return `
            <resto-list>
            </resto-list>
        `;
    },
    async render() {
        const restoList = document.querySelector('resto-list');
        const restoData = await RestoSource.featured();
        restoList.restoList = restoData.restaurants;

        const restoItems = document.querySelectorAll('.resto-container');
        restoItems.forEach((restoItem) => {
            restoItem.addEventListener('click', (event) => {
                const restoId = event.path[1].id;
                window.location.href = `#/detail/${restoId}`;
            });
        });
    },
};

export default featured;
