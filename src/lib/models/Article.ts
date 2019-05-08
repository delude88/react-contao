export default class Article {
  private readonly _id: string;
  private readonly _json: any;

  constructor(json: any) {
    this._json = json;
    this._id = json.id;
  }

  get id(): string {
    return this._id;
  }

  get json(): any {
    return this._json;
  }
}
