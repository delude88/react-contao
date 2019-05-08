import Article from './Article';

export default class Page {
    private readonly _id: string;
    private readonly _pid: string;
    private readonly _title: string;
    private readonly _alias: string;
    private readonly _description: string;
    private readonly _url: string;
    private readonly _articles: readonly Article[];
    private readonly _json: any;

    constructor(json: any) {
        this._json = json;
        this._id = json.id;
        this._pid = json.pid;
        this._title = json.title;
        this._alias = json.alias;
        this._description = json.description;
        this._url = json.url;
        const articles: Article[] = [];
        if (json.articles && json.articles.main) {
            for (const article of json.articles.main) {
                articles.push(new Article(article));
            }
        }
        this._articles = articles;
    }

    get id(): string {
        return this._id;
    }

    get pid(): string {
        return this._pid;
    }

    get title(): string {
        return this._title;
    }

    get alias(): string {
        return this._alias;
    }

    get description(): string {
        return this._description;
    }

    get url(): string {
        return this._url;
    }

    get articles(): readonly Article[] {
        return this._articles;
    }

    get json(): any {
        return this._json;
    }
}
