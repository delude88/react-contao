import Contao from './lib/Contao';

const url = "test.com";

const contao: Contao = new Contao(url);
contao.getStartPage();