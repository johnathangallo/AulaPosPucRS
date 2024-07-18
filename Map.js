//TDD - Teste Driven Development
var novoMapa = new Map();
class HistoryMap{

}

// acesso site: 11/11/2011 - 11:00 PM
novoMapa.set('11/11/2011 - 23:30 - URL',{title: 'TituloSite', url:'sozinha'});
novoMapa.set('11/11/2011 - 23:31 - URL',{});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');

console.log(resultado);
