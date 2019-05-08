// tslint:disable:no-expression-statement
import test from 'ava';
import { Contao } from './Contao';
import Page from './models/Page';

test('getApiUrl', async t => {
  const contao: Contao = new Contao('https://valensina-kids.tobiashegemann.de');
  t.deepEqual(
    contao.getApiUrl(),
    'https://valensina-kids.tobiashegemann.de/api'
  );
});

test('getStartPage', async t => {
  const contao: Contao = new Contao('https://valensina-kids.tobiashegemann.de');
  const startPage: Page = await contao.getStartPage();
  t.deepEqual(startPage.pid, '1');
  t.deepEqual(startPage.alias, 'kids-gewinnspiel');
});
