import RestoSource from '../../data/resto-source';
import urlParser from '../../routes/url-parser';
import '../elements/resto-detail';

const detail = {
    async render() {
        return `
            <resto-detail></resto-detail>
        `;
    },

    async afterRender() {
        const url = urlParser.parseActiveUrlWithoutCombiner();
        const restoDetail = document.querySelector('resto-detail');
        const restoData = await RestoSource.detailResto(url.id);
        console.log('restoData', restoData);
        restoDetail.resto = restoData.restaurant;
    },
};

export default detail;
