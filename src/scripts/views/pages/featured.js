import '../elements/resto-list';
import RestoSource from '../../data/resto-source';

const featured = {
    async render() {
        return `
        <resto-list>
        </resto-list>`;
    },
    async afterRender() {
        const restoList = document.querySelector('resto-list');
        const restoData = await RestoSource.featured();
        console.log('restoData: ', restoData);
        restoList.restoList = restoData.restaurants;

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

export default featured;
