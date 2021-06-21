import likeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenter = async (resto) => {
    const restoDetail = document.querySelector('resto-detail');
    restoDetail.resto = resto;
    await likeButtonPresenter.init(restoDetail);
};

export default createLikeButtonPresenter;
