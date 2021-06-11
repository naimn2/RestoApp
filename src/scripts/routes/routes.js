import detail from '../views/pages/detail';
import featured from '../views/pages/featured';

const routes = {
    '/': featured,
    '/featured': featured,
    '/detail/:id': detail,
};

export default routes;
