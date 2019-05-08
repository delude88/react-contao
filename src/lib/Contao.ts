import fetch, {Response} from "node-fetch";
import Page from './models/Page';
import SiteMap from './models/SiteMap';
import SiteMapEntry from './models/SiteMapEntry';

class Contao {
    private readonly _url: string;
    private _apiUrl: string | null;

    constructor(url: string) {
        this._url = url;
    }

    public url(): string {
        return this._url;
    }

    public getApiUrl(): string {
        if (!this._apiUrl) {
            this._apiUrl = this._url.substr(this._url.length - 1, 1) === '/' ? this._url + 'api' : this._url + '/api';
        }
        return this._apiUrl;
    }

    public readonly getSiteMap = async (): Promise<SiteMap> => {
        const response: Response = await fetch(this.getApiUrl() + '/sitemap');
        if (response.ok) {
            return new SiteMap(await response.json());
        }
        throw Error('Could not get SiteMap from ' + this._apiUrl);
    };

    public readonly getStartPage = async (): Promise<Page> => {
        const siteMap: SiteMap = await this.getSiteMap();
        if (siteMap.entries.length > 0) {
            const siteMapEntry: SiteMapEntry = siteMap.entries[0];
            return this.getPage(siteMapEntry.url);
        }
        throw Error('No start page defined');
    };

    public readonly getPage = async (url: string): Promise<Page> => {
        const response: Response = await fetch(this.getApiUrl() + '/page?url=' + url);
        if (response.ok) {
            return new Page(await response.json());
        }
        throw Error('Could not get Page from ' + this._apiUrl);
    };
}

export default Contao;

export {Contao};
