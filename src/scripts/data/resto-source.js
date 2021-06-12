import CONFIG from '../globals/config';

class RestoSource {
    static async featured() {
        const response = await fetch(`${CONFIG.BASE_URL}/list`);
        const json = await response.json();
        return json;
    }

    static async detailResto(id) {
        const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
        const json = await response.json();
        return json;
    }
}

export default RestoSource;
