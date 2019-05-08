import Page from './models/Page';
import SiteMap from './models/SiteMap';
declare class Contao {
    private readonly _url;
    private _apiUrl;
    constructor(url: string);
    url(): string;
    getApiUrl(): string;
    readonly getSiteMap: () => Promise<SiteMap>;
    readonly getStartPage: () => Promise<Page>;
    readonly getPage: (url: string) => Promise<Page>;
}
export default Contao;
export { Contao };
