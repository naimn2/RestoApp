import FavoriteIdb from '../data/favorite-idb';

const likeButtonPresenter = {
    async init(restoDetail) {
        this._resto = restoDetail.resto;
        this._restoDetail = restoDetail;
        await this._initButton();
    },

    async _initButton() {
        if (await this._isExist(this._resto.id)) {
            await this._renderUnlikeButton();
        } else {
            await this._renderLikeButton();
        }
    },

    async _isExist(id) {
        const resto = await FavoriteIdb.get(id);
        return !!resto;
    },

    _renderLikeButton() {
        this._restoDetail.renderLikeButton();
        this._restoDetail.likeButton.addEventListener('click', async () => {
            await FavoriteIdb.put(this._resto);
            this._initButton();
        });
    },

    _renderUnlikeButton() {
        this._restoDetail.renderUnlikeButton();
        this._restoDetail.likeButton.addEventListener('click', async () => {
            await FavoriteIdb.delete(this._resto.id);
            this._initButton();
        });
    },
};

export default likeButtonPresenter;
