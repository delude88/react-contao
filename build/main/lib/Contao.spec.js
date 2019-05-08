"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-expression-statement
const ava_1 = __importDefault(require("ava"));
const Contao_1 = require("./Contao");
ava_1.default('getApiUrl', async (t) => {
    const contao = new Contao_1.Contao('https://valensina-kids.tobiashegemann.de');
    t.deepEqual(contao.getApiUrl(), 'https://valensina-kids.tobiashegemann.de/api');
});
ava_1.default('getStartPage', async (t) => {
    const contao = new Contao_1.Contao('https://valensina-kids.tobiashegemann.de');
    const startPage = await contao.getStartPage();
    t.deepEqual(startPage.pid, '1');
    t.deepEqual(startPage.alias, 'kids-gewinnspiel');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0NvbnRhby5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLDhDQUF1QjtBQUN2QixxQ0FBa0M7QUFHbEMsYUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDMUIsTUFBTSxNQUFNLEdBQVcsSUFBSSxlQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUMsU0FBUyxDQUNULE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsOENBQThDLENBQy9DLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzdCLE1BQU0sTUFBTSxHQUFXLElBQUksZUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxTQUFTLEdBQVMsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDIn0=