// tslint:disable:no-expression-statement
import test from 'ava';
import { Contao } from './Contao';
test('getApiUrl', async (t) => {
    const contao = new Contao('https://valensina-kids.tobiashegemann.de');
    t.deepEqual(contao.getApiUrl(), 'https://valensina-kids.tobiashegemann.de/api');
});
test('getStartPage', async (t) => {
    const contao = new Contao('https://valensina-kids.tobiashegemann.de');
    const startPage = await contao.getStartPage();
    t.deepEqual(startPage.pid, '1');
    t.deepEqual(startPage.alias, 'kids-gewinnspiel');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0NvbnRhby5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QyxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdsQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtJQUMxQixNQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxTQUFTLENBQ1QsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQiw4Q0FBOEMsQ0FDL0MsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDN0IsTUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUM5RSxNQUFNLFNBQVMsR0FBUyxNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRCxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDLENBQUMifQ==