import Article from './Article';

export default class Page {
    private readonly _id: string;
    private readonly _pid: string;
    private readonly _title: string;
    private readonly _alias: string;
    private readonly _description: string;
    private readonly _url: string;
    private readonly _articles: Article[];

    constructor(json: string) {

    }
}