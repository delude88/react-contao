import fetch from "node-fetch";
import Page from './models/Page';
import SiteMap from './models/SiteMap';
class Contao {
    constructor(url) {
        this.getSiteMap = async () => {
            const response = await fetch(this.getApiUrl() + '/sitemap');
            if (response.ok) {
                return new SiteMap(await response.json());
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
            const response = await fetch(this.getApiUrl() + '/page?url=' + url);
            if (response.ok) {
                return new Page(await response.json());
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
export default Contao;
export { Contao };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9Db250YW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFpQixNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLElBQUksTUFBTSxlQUFlLENBQUM7QUFDakMsT0FBTyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFHdkMsTUFBTSxNQUFNO0lBSVIsWUFBWSxHQUFXO1FBZVAsZUFBVSxHQUFHLEtBQUssSUFBc0IsRUFBRTtZQUN0RCxNQUFNLFFBQVEsR0FBYSxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDdEUsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUM3QztZQUNELE1BQU0sS0FBSyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUM7UUFFYyxpQkFBWSxHQUFHLEtBQUssSUFBbUIsRUFBRTtZQUNyRCxNQUFNLE9BQU8sR0FBWSxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNqRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxZQUFZLEdBQWlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekM7WUFDRCxNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQUVjLFlBQU8sR0FBRyxLQUFLLEVBQUUsR0FBVyxFQUFpQixFQUFFO1lBQzNELE1BQU0sUUFBUSxHQUFhLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUUsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMxQztZQUNELE1BQU0sS0FBSyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUM7UUFyQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVNLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLFNBQVM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQzdHO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0EwQko7QUFFRCxlQUFlLE1BQU0sQ0FBQztBQUV0QixPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUMifQ==