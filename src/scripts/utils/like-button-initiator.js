import FavoriteIdb from '../data/favorite-idb';

const likeButtonInitiator = {
    async init({ resto, likeButton, restoDetail }) {
        console.log('like-button-initiator.on-init:resto:', resto);
        this._resto = resto;
        this._restoDetail = restoDetail;
        if (await this._isExist(this._resto.id)) {
            await this._renderLikeButton();
        }
        likeButton.addEventListener('click', async () => {
            console.log('like-button-initiator.on-click:resto:', this._resto);
            if (await this._isExist(this._resto.id)) {
                console.log('delete');
                await this._renderUnlikeButton();
                await FavoriteIdb.delete(this._resto.id);
            } else {
                console.log('put');
                await this._renderLikeButton();
                await FavoriteIdb.put(this._resto);
            }
        });
    },

    async _isExist(id) {
        const resto = await FavoriteIdb.get(id);
        return !!resto;
    },

    async _renderLikeButton() {
        this._restoDetail.renderLikeButton();
    },

    async _renderUnlikeButton() {
        this._restoDetail.renderUnlikeButton();
    },
};

export default likeButtonInitiator;
