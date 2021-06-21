import RestoSource from '../../data/resto-source';
import urlParser from '../../routes/url-parser';
import likeButtonPresenter from '../../utils/like-button-presenter';
import '../elements/resto-detail';

const detail = {
    async generateElement() {
        return `
            <resto-detail></resto-detail>
        `;
    },

    async render() {
        const url = urlParser.parseActiveUrlWithoutCombiner();
        const restoDetail = document.querySelector('resto-detail');
        const restoData = await RestoSource.detailResto(url.id);
        console.log('restoData', restoData);
        restoDetail.resto = restoData.restaurant;

        await likeButtonPresenter.init(restoDetail);
    },
};

export default detail;
