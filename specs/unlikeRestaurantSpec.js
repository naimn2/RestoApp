/* eslint-disable no-undef */
import FavoriteIdb from '../src/scripts/data/favorite-idb';
import createLikeButtonPresenter from './helpers/testFactories';

describe('Unliking a restaurant', () => {
    const createRestoDetail = () => {
        document.body.innerHTML = '<resto-detail></resto-detail>';
    };

    beforeEach(async () => {
        createRestoDetail();
        await FavoriteIdb.put({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteIdb.delete(1);
    });

    it('should display unlike button when the resto has been liked', async () => {
        await createLikeButtonPresenter({ id: 1 });

        expect(document.querySelector('.fa-heart')).toBeTruthy();
    });

    it('shouldn\'t display like button when the resto has been liked', async () => {
        await createLikeButtonPresenter({ id: 1 });

        expect(document.querySelector('.fa-heart-o')).toBeFalsy();
    });

    it('should be able to remove liked resto from the list', async () => {
        await createLikeButtonPresenter({ id: 1 });

        document.querySelector('#like-button').dispatchEvent(new Event('click'));

        expect(await FavoriteIdb.getAll()).toEqual([]);
    });

    it('should not throw error if the unliked movie is not in the list', async () => {
        await createLikeButtonPresenter({ id: 1 });

        await FavoriteIdb.delete(1);

        document.querySelector('#like-button').dispatchEvent(new Event('click'));

        expect(await FavoriteIdb.getAll()).toEqual([]);
    });
});
