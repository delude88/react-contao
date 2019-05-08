export default class SiteMapEntry {
    private readonly _url: string;
    private readonly _json: string;

    constructor(json: any) {
        this._json = json;
        this._url = json.url;
    }

    get url(): string {
        return this._url;
    }

    get json(): any {
        return this._json;
    }
}
