/* eslint-disable no-undef */
import FavoriteIdb from '../src/scripts/data/favorite-idb';
import createLikeButtonPresenter from './helpers/testFactories';
import '../src/scripts/views/elements/resto-detail';

describe('liking a restaurant', () => {
    const createRestoDetail = () => {
        document.body.innerHTML = '<resto-detail></resto-detail>';
    };

    beforeEach(() => {
        createRestoDetail();
    });

    it('should show the like button when the resto has not been liked', async () => {
        await createLikeButtonPresenter({ id: 1 });
        expect(document.querySelector('.fa-heart-o')).toBeTruthy();
    });

    it('shouldn\'t show unlike button when the resto has not been liked', async () => {
        await createLikeButtonPresenter({ id: 2 });
        expect(document.querySelector('.fa-heart')).toBeFalsy();
    });

    it('should be able to like the resto', async () => {
        await createLikeButtonPresenter({ id: 3 });

        document.querySelector('#like-button').dispatchEvent(new Event('click'));

        const resto = await FavoriteIdb.get(3);
        expect(resto).toEqual({ id: 3 });

        FavoriteIdb.delete(3);
    });

    it('shouldn\'t add a resto again when it is already liked', async () => {
        await createLikeButtonPresenter({ id: 4 });

        await FavoriteIdb.put({ id: 4 });

        document.querySelector('#like-button').dispatchEvent(new Event('click'));

        const allResto = await FavoriteIdb.getAll();
        expect(allResto).toEqual([{ id: 4 }]);

        FavoriteIdb.delete(4);
    });

    it('shouldn\'t add a resto when it has no id', async () => {
        await createLikeButtonPresenter({});

        document.querySelector('#like-button').dispatchEvent(new Event('click'));

        const allResto = await FavoriteIdb.getAll();
        expect(allResto).toEqual([]);
    });
});
