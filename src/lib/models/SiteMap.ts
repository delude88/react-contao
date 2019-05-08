import SiteMapEntry from './SiteMapEntry';

export default class SiteMap {
  private readonly _entries: readonly SiteMapEntry[];
  private readonly _json: any;

  constructor(json: any) {
    this._json = json;
    const entries: SiteMapEntry[] = [];
    for (const page of json) {
      entries.push(new SiteMapEntry(page));
    }
    this._entries = entries;
  }

  get entries(): readonly SiteMapEntry[] {
    return this._entries;
  }

  get json(): any {
    return this._json;
  }
}
