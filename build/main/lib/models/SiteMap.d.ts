import SiteMapEntry from './SiteMapEntry';
export default class SiteMap {
    private readonly _entries;
    private readonly _json;
    constructor(json: any);
    readonly entries: readonly SiteMapEntry[];
    readonly json: any;
}
