import drawerInitiator from '../utils/drawer-initiator';
import urlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        console.log('initialize app shell');
        drawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderPage() {
        const url = urlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.generateElement();
        await page.render();
    }
}

export default App;
