// tslint:disable:no-expression-statement
import test from 'ava';
import {Contao} from './Contao';
import Page from './models/Page';

const url: string = "https://test.tobiashegemann.de";

test('getApiUrl', async t => {
    const contao: Contao = new Contao(url);
    t.deepEqual(
        contao.getApiUrl(),
        url + '/api'
    );
});

test('getStartPage', async t => {
    const contao: Contao = new Contao(url);
    const startPage: Page = await contao.getStartPage();
    t.deepEqual(startPage.pid, '1');
});
