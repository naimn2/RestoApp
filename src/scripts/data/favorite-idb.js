import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const FavoriteIdb = {
    async get(id) {
        if (!id) {
            return null;
        }
        console.log(`get ${id}`);
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAll() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async put(resto) {
        if (!resto.id) {
            return null;
        }
        console.log(`put ${resto.id}`);
        return (await dbPromise).put(OBJECT_STORE_NAME, resto);
    },
    async delete(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoriteIdb;
