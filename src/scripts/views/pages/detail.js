import RestoSource from '../../data/resto-source';
import urlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
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

        const buttonLike = document.querySelector('#like-button');
        await likeButtonInitiator.init({
            resto: restoData.restaurant,
            likeButton: buttonLike,
            restoDetail,
        });
    },
};

export default detail;
