//add botao para remover jogador
class criarJogador {
nome
vitorias
empates
derrotas
pontos
constructor (nome,vitorias,empates,derrotas,pontos) {
    this.nome = nome
        this.vitorias = vitorias
        this.empates = empates
        this.derrotas = derrotas
        this.pontos = calculaPontos(this)
    }
}
// var rafa = new criarJogador("Rafa", 3, 1, 1, 0)
// var paulo = new criarJogador("Paulo", 1, 1, 3, 0)
// var gui = new criarJogador("Gui", 2, 0, 2, 0)

var jogadores = [
    new criarJogador("less", 0, 0, 0, 0),
    new criarJogador("aspas", 0, 0, 0, 0),
    new criarJogador("sacy", 0, 0, 0, 0),
    new criarJogador("saadhak", 0, 0, 0, 0),
    new criarJogador("pAncada", 0, 0, 0, 0)
]

const box = document.getElementById('box')
var somaVitorias = 0
var somaEmpates = 0
var somaDerrotas = 0
let jogador;
var restoEmpates = somaEmpates % 2

function calculaPontos(jogador) {
    return (jogador.vitorias * 3) + jogador.empates
}

function somar() {
    for (let i = 0; i < jogadores.length; i++) {
        somaVitorias += jogadores[i]['vitorias'];
        somaEmpates += jogadores[i]['empates'];
        somaDerrotas += jogadores[i]['derrotas'];
        console.log(jogadores[i])
    }
    console.log('v', somaVitorias);
    console.log('e', somaEmpates);
    console.log('d', somaDerrotas);
}
somar()

function exibeJogadoresNaTela(jogadores) {
    let elemento = ""
    for(var i=0; i < jogadores.length; i++) {
        elemento += '<tr><td class="jogador">' + jogadores[i].nome + '</td>'
        elemento += '   <td>' + jogadores[i].vitorias + '</td>'
        elemento += '   <td>' + jogadores[i].empates + '</td>'
        elemento += '   <td>' + jogadores[i].derrotas + '</td>'
        elemento += '   <td>' + jogadores[i].pontos + '</td>'
        elemento += '   <td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>'
        elemento += '   <td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>'
        elemento += '   <td><button onClick="adicionarDerrota(' + i +')">Derrota</button></td>'
        elemento += '</tr>'
    }
    
    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}
exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    verificarVED()
    ordenar()
    exibeJogadoresNaTela(jogadores)
} 

function adicionarEmpate(i) {
    jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    verificarVED()
    ordenar()
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    jogador = jogadores[i]
    jogador.derrotas++
    verificarVED()
    ordenar()
    exibeJogadoresNaTela(jogadores)
}

function verificarVED() {
    somar()
    if (somaVitorias > somaDerrotas ) {
        box.innerHTML = ''
        box.innerHTML = '<h3>Adicione uma derrota a um dos outros jogadores</h3>'
//        setTimeout(()=>{box.innerHTML = ''}, 10000)
        return
    }
    if (restoEmpates > 0 || somaEmpates == 1) {
        box.innerHTML = ''
        box.innerHTML = '<h3>Adicione um empate a um dos outros jogadores</h3>'
//        setTimeout(()=>{box.innerHTML = ''}, 10000)
        return
    } 
    if (somaDerrotas > somaVitorias) {
        box.innerHTML = ''
        box.innerHTML = '<h3>Adicione uma vitória a um dos outros jogadores</h3>'
//        setTimeout(()=>{box.innerHTML = ''}, 10000)
        return
    }}
//    function erro() {box.innerHTML = '<h4>erro</h4>'} 
//    setTimeout(erro(), 2500)

function addPlayer() {
    let tabelaJogadores = document.getElementById("tabelaJogadores")
    let elemento = "" ;
    exibeJogadoresNaTela(jogadores)
        elemento += 
            '<tr id="tr"><td class="jogador"><input type="text" id="inputNvJogador" class="inputJogador" placeholder="Jogador"><button onclick="addJogadortTR()">ADD</button></td>'
        elemento += '   <td></td>'
        elemento += '   <td></td>'
        elemento += '   <td></td>'
        elemento += '   <td></td>'
        elemento += '   <td></td>'
        elemento += '   <td></td>'
        elemento += '   <td></td>'
        elemento += '</tr>'

    tabelaJogadores.innerHTML = tabelaJogadores.innerHTML + elemento
}

function addJogadortTR() {    
    let inputJogador = document.getElementById("inputNvJogador")
    
    if (inputJogador) {
       let  tJogador = inputJogador.value;
       console.log(tJogador);
       let newJogador = new criarJogador(tJogador, 0 ,0 ,0 ,0)
       jogadores.push(newJogador)
    }
//    for (let i in jogadores) {
//        console.log(jogadores[i]["nome"], jogadores[i]["vitorias"]);
//    }

    document.getElementById("tr").remove()
    exibeJogadoresNaTela(jogadores)
}

function zerar() { 
    for (let i in jogadores) {
        jogadores[i]["vitorias"] = 0
        jogadores[i]["empates"] = 0
        jogadores[i]["derrotas"] = 0
        jogadores[i]["pontos"] = 0
    }
// for (let i in jogadores) {
//     console.log(jogadores[i]["nome"], jogadores[i]["vitorias"], 'v');
//     console.log(jogadores[i]["nome"], jogadores[i]["empates"], 'e');
//     console.log(jogadores[i]["nome"], jogadores[i]["derrotas"], 'd');
//     console.log(jogadores[i]["nome"], jogadores[i]["pontos"],'p');
// }
    box.innerHTML = ''
    exibeJogadoresNaTela(jogadores)
}

function ordenar() {
    jogadores.sort(function compare(a,b) {
        if (a.pontos > b.pontos){
            return -1
        } else {return true}
    })
    exibeJogadoresNaTela(jogadores);
} 

// let listinha = [1,6,3,7,8,4,2]
// listinha.sort()
// listinha.reverse()
//console.log(listinha);