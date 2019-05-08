import Contao from './lib/Contao';

console.log("HELLO WORLD");

const contao: Contao = new Contao("https://valensina-kids.tobiashegemann.de");
contao.getStartPage();