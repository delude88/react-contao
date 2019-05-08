import Article from './Article';
export default class Page {
    private readonly _id;
    private readonly _pid;
    private readonly _title;
    private readonly _alias;
    private readonly _description;
    private readonly _url;
    private readonly _articles;
    private readonly _json;
    constructor(json: any);
    readonly id: string;
    readonly pid: string;
    readonly title: string;
    readonly alias: string;
    readonly description: string;
    readonly url: string;
    readonly articles: readonly Article[];
    readonly json: any;
}
