"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-expression-statement
const ava_1 = __importDefault(require("ava"));
const Contao_1 = require("./Contao");
const url = "https://test.tobiashegemann.de";
ava_1.default('getApiUrl', async (t) => {
    const contao = new Contao_1.Contao(url);
    t.deepEqual(contao.getApiUrl(), url + '/api');
});
ava_1.default('getStartPage', async (t) => {
    const contao = new Contao_1.Contao(url);
    const startPage = await contao.getStartPage();
    t.deepEqual(startPage.pid, '1');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0NvbnRhby5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLDhDQUF1QjtBQUN2QixxQ0FBZ0M7QUFHaEMsTUFBTSxHQUFHLEdBQVcsZ0NBQWdDLENBQUM7QUFFckQsYUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDeEIsTUFBTSxNQUFNLEdBQVcsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLFNBQVMsQ0FDUCxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLEdBQUcsR0FBRyxNQUFNLENBQ2YsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDM0IsTUFBTSxNQUFNLEdBQVcsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsTUFBTSxTQUFTLEdBQVMsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDIn0=