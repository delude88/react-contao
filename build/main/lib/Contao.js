"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Page_1 = __importDefault(require("./models/Page"));
const SiteMap_1 = __importDefault(require("./models/SiteMap"));
class Contao {
    constructor(url) {
        this.getSiteMap = async () => {
            const response = await node_fetch_1.default(this.getApiUrl() + '/sitemap');
            if (response.ok) {
                return new SiteMap_1.default(await response.json());
            }
            throw Error('Could not get SiteMap from ' + this._apiUrl);
        };
        this.getStartPage = async () => {
            const siteMap = await this.getSiteMap();
            if (siteMap.entries.length > 0) {
                const siteMapEntry = siteMap.entries[0];
                return this.getPage(siteMapEntry.url);
            }
            throw Error('No start page defined');
        };
        this.getPage = async (url) => {
            const response = await node_fetch_1.default(this.getApiUrl() + '/page?url=' + url);
            if (response.ok) {
                return new Page_1.default(await response.json());
            }
            throw Error('Could not get Page from ' + this._apiUrl);
        };
        this._url = url;
    }
    url() {
        return this._url;
    }
    getApiUrl() {
        if (!this._apiUrl) {
            this._apiUrl = this._url.substr(this._url.length - 1, 1) === '/' ? this._url + 'api' : this._url + '/api';
        }
        return this._apiUrl;
    }
}
exports.Contao = Contao;
exports.default = Contao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9Db250YW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBMkM7QUFDM0MseURBQWlDO0FBQ2pDLCtEQUF1QztBQUd2QyxNQUFNLE1BQU07SUFJUixZQUFZLEdBQVc7UUFlUCxlQUFVLEdBQUcsS0FBSyxJQUFzQixFQUFFO1lBQ3RELE1BQU0sUUFBUSxHQUFhLE1BQU0sb0JBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDdEUsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxpQkFBTyxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDN0M7WUFDRCxNQUFNLEtBQUssQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDO1FBRWMsaUJBQVksR0FBRyxLQUFLLElBQW1CLEVBQUU7WUFDckQsTUFBTSxPQUFPLEdBQVksTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDakQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sWUFBWSxHQUFpQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUM7UUFFYyxZQUFPLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBaUIsRUFBRTtZQUMzRCxNQUFNLFFBQVEsR0FBYSxNQUFNLG9CQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5RSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLGNBQUksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsTUFBTSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQztRQXJDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0sR0FBRztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sU0FBUztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDN0c7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQTBCSjtBQUlPLHdCQUFNO0FBRmQsa0JBQWUsTUFBTSxDQUFDIn0=