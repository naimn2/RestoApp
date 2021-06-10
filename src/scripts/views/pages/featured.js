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
    },
};

export default featured;
