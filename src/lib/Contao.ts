import SiteMap from './models/SiteMap';
import Page from "./models/Page";

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
            if (this._url.substr(this._url.length - 1, 1) === '/') {
                this._apiUrl = this._url + "api";
            } else {
                this._apiUrl = this._url + "/api";
            }
        }
        return this._apiUrl;
    }

    public getSiteMap = async (): Promise<SiteMap> => {
        const response: Response = await fetch(this.getApiUrl() + "/sitemap");
        if (response.ok) {
            return new SiteMap(await response.json());
        }
        throw Error("Could not get SiteMap from " + this._apiUrl);
    };

    public getPage = async (url: string): Promise<Page> => {
        const response: Response = await fetch(this.getApiUrl() + "/page/?" + url);
        if (response.ok) {
            return new Page(await response.json());
        }
        throw Error("Could not get Page from " + this._apiUrl);
    };

}

export default Contao;

export {Contao};
