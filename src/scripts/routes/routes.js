import detail from '../views/pages/detail';
import favoriteResto from '../views/pages/favorite-resto';
import featured from '../views/pages/featured';

const routes = {
    '/': featured,
    '/featured': featured,
    '/favorite': favoriteResto,
    '/detail/:id': detail,
};

export default routes;
